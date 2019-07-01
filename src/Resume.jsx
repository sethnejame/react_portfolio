import React, { Component } from "react"
import axios from "axios"
import ResumeCard from "./ResumeCard"

class Resume extends Component {
    constructor() {
        super();
        this.state = {
            resume: []
        };
    }

    componentDidMount() {
        axios.get('./src/data/resume.json')
            .then(response => {
                this.setState({
                    resume: response.data
                })
            })
    }

    render() {
        const resume = this.state.resume
        let resumeList 

        if (resume.length > 0) {
            resumeList = resume.map(item => {
                return (
                    <div key={item.id} className="min-h-300 my-1 px-1 w-full">
                        <ResumeCard item={item} />
                    </div>
                )
            })
        }


        return (
            <div className="content-wrapper" style={{ padding: '20px'}}>
                <div className="flex mb-4">
                    <div className="w-3/4">
                        <h1 style={{ fontFamily: 'Shrikhand', fontWeight: 'normal'}}>Resume</h1>
                        <p>More experience and references available upon request. . .</p>
                    </div>

                </div>

                <div className="w-full">
                    {resumeList}
                </div>
            </div>
        )
    }
};

export default Resume