import React, { useEffect, useState } from 'react'
import {Worker} from '@react-pdf-viewer/core'
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css'
import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'


export default function Bookpdf() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    // pdf file onChange state
    const [pdfFile, setPdfFile] = useState(null);

    // pdf file error state
    const [pdfError, setPdfError] = useState('');


    // handle file onChange event
    const allowedFiles = ['application/pdf'];
    const handleFile = (e) => {
        let selectedFile = e.target.files[0];
        // console.log(selectedFile.type);
        if (selectedFile) {
            if (selectedFile && allowedFiles.includes(selectedFile.type)) {
                let reader = new FileReader();
                reader.readAsDataURL(selectedFile);
                reader.onloadend = (e) => {
                    setPdfError('');
                    setPdfFile(e.target.result);
                }
            }
            else {
                setPdfError('Not a valid pdf: Please select only PDF');
                setPdfFile('');
            }
        }
        else {
            console.log('please select a PDF');
        }
    }
    return (
        <div className="container">

            {/* Upload PDF */}
            <form>

                <label><h5>Upload PDF</h5></label>
                <br></br>

                <input type='file' className="form-control"
                    onChange={handleFile}></input>

                {/* we will display error message in case user select some file
          other than pdf */}
                {pdfError && <span className='text-danger'>{pdfError}</span>}

            </form>

            {/* View PDF */}
            <h5>View PDF</h5>
            <div className="viewer">

                {/* render this if we have a pdf file */}
                {pdfFile && (
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">
                        <Viewer fileUrl={pdfFile}
                            plugins={[defaultLayoutPluginInstance]}></Viewer>
                    </Worker>
                )}

                {/* render this if we have pdfFile state null   */}
                {!pdfFile && <>No file is selected yet</>}

            </div>

        </div>



    )
}
