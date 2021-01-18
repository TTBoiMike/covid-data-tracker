import React from 'react'

class Search extends React.Component {


    handleSubmit = (event) => {
        let location = event.currentTarget.location.value
        event.preventDefault()
        this.props.fetchdata(location)
    }

    render() {
        return (
                <>
            <div className="search">
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input type="text" name="location" id="location" />
                </form>
            </div>
            </>
        )
    }
}

export default Search