import React, {Component} from 'react'
import {connect} from 'react-redux'
import {saveMemes} from '../../redux/reducers/noPromiseReducer'
import axios from 'axios'
import Meme from '../Meme'
import AddMeme from '../AddMeme'

class NoPromiseMemes extends Component{
    componentDidMount(){
        axios.get('http://localhost:3987/api/meme').then(res => {
            this.props.saveMemes(res.data)
        })
    }

    deleteMeme = id => {
        axios.delete(`http://localhost:3987/api/meme/${id}`).then(res => {
            this.props.saveMemes(res.data)
        })
    }

    addMeme = (url, title) => {
        axios.post('http://localhost:3987/api/meme', {url, title}).then(res => {
            this.props.saveMemes(res.data)
        })
    }

    editMeme = (id, url, title) => {
        axios.put(`http://localhost:3987/api/meme/${id}`, {url, title}).then(res => {
            this.props.saveMemes(res.data)
        })
    }

    render(){
        const memes = this.props.memes.map(meme => {
            return <Meme key={`No Redux Promise Component #${meme.id}`} info={meme} editMeme={this.editMeme} deleteMeme={this.deleteMeme}/>
        })
        return(
            <div className='left-container'>
                <h1>No Promise Middleware</h1>
                <AddMeme key='No Redux Promise Add Component' addMeme={this.addMeme}/>
                {memes}
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        memes: reduxState.noPromiseReducer.memes
    }
}

export default connect(mapStateToProps, {saveMemes})(NoPromiseMemes)