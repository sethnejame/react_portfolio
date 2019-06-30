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
                    <div key={item.id} className="min-h-900 my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <ResumeCard item={item} />
                    </div>
                )
            })
        }


        return (
            <div className="content-wrapper" style={{ padding: '20px'}}>
                <div className="flex mb-4">
                    <div className="w-3/4">
                        <h1>Resume</h1>
                        <p>More experience and references available upon request. . .</p>
                    </div>

                </div>

                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    {resumeList}
                </div>
            </div>
        )
    }
};

export default Resume