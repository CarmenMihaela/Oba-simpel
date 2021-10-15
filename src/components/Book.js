import { useState } from "react"
import BookDetails from "./BookDetails"

const Book = ({ title, omslagafbeeldingen, author, publisher, language, series, description }) => {

    const [isOpen, setIsOpen] = useState(false)
    return (

        <article >
            <h3>{title} / {author} </h3>
            <button onClick={() => setIsOpen(true)}> <img src={omslagafbeeldingen} alt={"cover picture of " + title} /> </button>
            <BookDetails 
            omslagafbeeldingen={omslagafbeeldingen}
            title={title} 
            author={author}
            publisher={publisher}
            language={language}
            series={series}
            description={description}
            open={isOpen} onClose={() => setIsOpen(false)}>
            </BookDetails>
        </article>
    )
}

export default Book
