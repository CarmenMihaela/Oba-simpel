import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CoursesLoop from './CoursesLoop';
import { Loader } from 'semantic-ui-react'
import url from './Url'

const Courses = () => {
    const [ courses, setCourses] = useState();
    const [ uri, setUri] = useState(url + "cursussen");
    const [ loading, setLoading] = useState(false);
    const [ value, setValue] = useState("")
    const [ checked, setChecked] = useState("")

    useEffect(() => {
        setChecked("")
        setUri(url + "cursussen")
        fetchData(uri + "/random")
        return () => {
            setValue("")
        }
    }, [])
    const fetchData = (alt = "") => {
        setLoading(true)
        const apiUrl = alt !== "" ? alt : uri
        console.log(apiUrl)
        axios.get(`${apiUrl}`)
            .then(res => {
                setCourses(res.data.cursussen)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }
    const Uri = (e) => {
        setChecked(e.target.name)
        fetchData(uri + "/datum/" + e.target.name)
        setUri(uri + "/datum/" + e.target.name)
    }
    const onchange = (e) => {
        setValue(e.target.value)
    }
    const onclick = () => {
        if (value !== "") {
            const uu = url + "cursussen/zoek/" + value
            setUri(uu)
            fetchData(uu)
            setChecked("")
        } else {
            setValue("Schrijf maar iets")
        }
    }
    return (
        <div>
            <input onChange={onchange} value={value}></input>
            <button onClick={() => onclick()}>Zoek</button>
            <div className="randomActCal">
                <button name="c_nextweek" style={checked === "c_nextweek" ? {backgroundColor: "red"} : null} onClick={Uri} className="raActCal">
                    Volgende Week
                </button >
                <button name="d_thismonth" style={checked === "d_thismonth" ? {backgroundColor: "red"} : null} onClick={Uri} className="raActCal">
                    Deze Maand
                </button >
                <button name="e_nextmonth" style={checked === "e_nextmonth" ? {backgroundColor: "red"} : null} onClick={Uri} className="raActCal">
                    Aankomende Maand
                </button >
                <button name="f_next3month" style={checked === "f_next3month" ? {backgroundColor: "red"} : null} onClick={Uri} className="raActCal">
                    In Drie Maanden
                </button>
                <button name="g_thisyear" style={checked === "g_thisyear" ? {backgroundColor: "red"} : null} onClick={Uri} className="raActCal">
                    Deze Jaar
                </button >
            </div>

            {!loading ?
                <CoursesLoop courses={courses} />
                :
                <Loader style={{ marginTop: "200px" }} active inline='centered' />
            }



        </div>
    )
}

export default Courses