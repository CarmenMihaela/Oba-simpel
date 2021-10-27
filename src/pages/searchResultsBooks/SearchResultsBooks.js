import { useEffect, useState } from "react"
import Book from "../../components/Book"
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import GenreBookFilter from "./GenreBookFilter";


const Boeken = () => {
    const [booksList, setBooksList] = useState()
    const [loading, setLoading] = useState('1')
    const [filteredBooks, setFilteredBooks] = useState()
    const [ pageNumb, setPageNumb ] = useState(1)
    const [ genreName, setGenreName ] = useState("random/")
    const [ checked, setChecked] = useState("")
    const [ ad, setAd ] = useState('')
    const [ searchValue, setSearchValue ] = useState('')
    const [ mainSearchValue, setMainSearchValue ] = useState('')

    useEffect(() => {
        getBooks()
    }, [pageNumb, genreName, ad])
    const getBooks = () => {
        setFilteredBooks([])
        setLoading(true)
        setBooksList([])
        const value = searchValue.length > 0 ? searchValue : ''
        const url = `https://techgrounds-oba.herokuapp.com/api/oba/techgrounds/boeken/${genreName + ad}/page/${pageNumb}`
        console.log(url)
        fetch(url)
            .then(response => response.json())
            .then(results => {
                setLoading(false)
                setBooksList(results.boeken)
            })
    }
    const nextPage = () => {
        setPageNumb(prevState => prevState + 1)
        // setGenreName('/')
        console.log(pageNumb)
        // getBooks()
    }
    const previousPage = () => {
        setPageNumb(prevState => prevState - 1)
        // setGenreName('/')
        console.log(pageNumb)
        // getBooks()
    }
    const defineGenre = (e) => {
        setChecked(e.target.name)
        setPageNumb(prevState => 1)
        setGenreName(e.target.name)
        setAd('')
        setSearchValue('')
    }
    const onchange = (e) => {
        setSearchValue(e.target.value)
    }
    const onzoek = (e) => {
        setGenreName(prevState => prevState + searchValue)
        setAd('')
        setPageNumb(1)
        
    }


    return (
        <>
            
            <div className="div-genreFilterBtn">
                <button onClick={defineGenre} style={checked === "random/" ? {backgroundColor: "red"} : null} className="genreFilterBtn" name="random/">willekeurig</button>
                <button onClick={defineGenre} style={checked === "largetype/" ? {backgroundColor: "red"} : null} className="genreFilterBtn" name="largetype/">largetype</button>
                <button onClick={defineGenre} style={checked === "audiobook/" ? {backgroundColor: "red"} : null} className="genreFilterBtn" name="audiobook/">audio boeken</button>
                <button onClick={defineGenre} style={checked === "dvdvideo/" ? {backgroundColor: "red"} : null} className="genreFilterBtn" name="dvdvideo/">dvdvideo</button>
                <button onClick={defineGenre} style={checked === "book/" ? {backgroundColor: "red"} : null} className="genreFilterBtn" name="book/">book</button>
                <button onClick={defineGenre} style={checked === "ebook/" ? {backgroundColor: "red"} : null} className="genreFilterBtn" name="ebook/">e-book</button>
            </div>

            <div className="inputDiv" style={{display: "block",  margin:"-200px auto"}}>
                <input style={{display: "block", border: "1px solid red"}} onChange={onchange} value={searchValue}></input>
                <button className="genreFilterBtn" onClick={onzoek}>Zoek</button>
                </div>
            
            {booksList && booksList && <GenreBookFilter books={booksList} searchValue={searchValue} setSearchValue={setSearchValue} ad={ad} setAd={setAd} genreName={genreName} setGenreName={setGenreName} filteredBooks={filteredBooks} setFilteredBooks={setFilteredBooks} />}


            <section className="search_results">
                {loading === false ?
                    <div>
                        {filteredBooks && filteredBooks.length > 0 ?
                            <div className="result_card">
                                {booksList.length > 0 ?  <div> 
                                    <button onClick={previousPage}>vorige pagina</button><h3>{filteredBooks && filteredBooks.length}</h3><button onClick={nextPage}>volgende pagina</button></div> : null }
                               
                                
                                {filteredBooks && filteredBooks.map(({ id, title, omslagafbeeldingen, auteurs, uitgever, taal, series, beschrijving }) => (
                                    <Book key={id}
                                        title={title}
                                        omslagafbeeldingen={omslagafbeeldingen[1]}
                                        author={auteurs}
                                        publisher={uitgever}
                                        language={taal}
                                        series={series}
                                        description={beschrijving}
                                    />)
                                )}
                                
                            </div>
                            :
                            <div className="result_card">
                                {booksList ?  <div> 
                                    <button onClick={previousPage}>vorige pagina</button><h3>{booksList && booksList.length}</h3><button onClick={nextPage}>volgende pagina</button></div> : null }
                                
                                
                                {booksList && booksList.map(({ id, title, omslagafbeeldingen, auteurs, uitgever, taal, series, beschrijving }) => (
                                    <Book key={id}
                                        title={title}
                                        omslagafbeeldingen={omslagafbeeldingen[1]}
                                        author={auteurs}
                                        publisher={uitgever}
                                        language={taal}
                                        series={series}
                                        description={beschrijving}
                                    />)
                                )}
                                
                            </div>
                        }
                    </div>
                    :
                    loading === true ?
                        <ClipLoader color={'rgb(1, 117, 113)'} loading={loading} css={css`display: block;margin: 0 auto;`} size={150} />
                        :
                        <></>
                }
            </section>




        </>
    )
}

export default Boeken