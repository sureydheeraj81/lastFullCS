import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
const user_AppUrl='http://localhost:8000/api/usagedetail/usageUserType'
const industry_AppUrl='http://localhost:8000/api/usageindustry/usageindustrytype'


const UsageUserType = () => {
    const [dataType, setDataType] = useState('User Type'); 
    const [formValues, setFormValues] = useState({
        month: '',
        year: '',
        usageDetails: [
            { user_type: 'Other Government Users', rtk_region_1: '', rtk_region_2: '', rds_region_1: '', rds_region_2: '' },
            { user_type: 'Private Users', rtk_region_1: '', rtk_region_2: '', rds_region_1: '', rds_region_2: '' },
            { user_type: 'Research and Academic Users', rtk_region_1: '', rtk_region_2: '', rds_region_1: '', rds_region_2: '' },
            { user_type: 'Survey of India', rtk_region_1: '', rtk_region_2: '', rds_region_1: '', rds_region_2: '' },
            { user_type: 'Training and Maintenance', rtk_region_1: '', rtk_region_2: '', rds_region_1: '', rds_region_2: '' }
        ],
        industryDetails: [
            { industryType: '', rtkRegion1: '', rtkRegion2: '', rdsRegion1: '', rdsRegion2: '' }
        ]
    });

    const handleInputChange = (index, field, value, dataType) => {
        if (dataType === 'User Type') {
            const updatedDetails = [...formValues.usageDetails];
            updatedDetails[index][field] = value;
            setFormValues({ ...formValues, usageDetails: updatedDetails });
        } else if (dataType === 'Industry Type') {
            const updatedDetails = [...formValues.industryDetails];
            updatedDetails[index][field] = value;
            setFormValues({ ...formValues, industryDetails: updatedDetails });
        }
    };

    const addIndustryRow = () => {
        setFormValues({
            ...formValues,
            industryDetails: [
                ...formValues.industryDetails,
                { industryType: '', rtkRegion1: '', rtkRegion2: '', rdsRegion1: '', rdsRegion2: '' }
            ]
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', formValues);

        if (dataType === 'User Type') {


            try {
                const response = await axios.post(user_AppUrl, formValues);
                console.log(response.data);

                setFormValues({
                    month: '',
                    year: '',
                    usageDetails: [
                        { user_type: 'Other Government Users', rtk_region_1: '', rtk_region_2: '', rds_region_1: '', rds_region_2: '' },
                        { user_type: 'Private Users', rtk_region_1: '', rtk_region_2: '', rds_region_1: '', rds_region_2: '' },
                        { user_type: 'Research and Academic Users', rtk_region_1: '', rtk_region_2: '', rds_region_1: '', rds_region_2: '' },
                        { user_type: 'Survey of India', rtk_region_1: '', rtk_region_2: '', rds_region_1: '', rds_region_2: '' },
                        { user_type: 'Training and Maintenance', rtk_region_1: '', rtk_region_2: '', rds_region_1: '', rds_region_2: '' }
                    ],
                    // industryDetails: [
                    //     { industryType: '', rtkRegion1: '', rtkRegion2: '', rdsRegion1: '', rdsRegion2: '' }
                    // ]
                });

                if (response.data.success === true) {
                    toast.success("Data submitted successfully");
                }
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        } else if (dataType === 'Industry Type') {
            try {
                const response = await axios.post(industry_AppUrl, formValues);
                console.log(response.data);

                setFormValues({
                    month: '',
                    year: '',

                    industryDetails: [
                        { industryType: '', rtkRegion1: '', rtkRegion2: '', rdsRegion1: '', rdsRegion2: '' }
                    ]
                });
                console.log(response.data);


                if (response.data.success === true) {
                    toast.success("Data submitted successfully000");
                }
            } catch (error) {
                console.error('Error submitting form:', error);
            }

        }

    };

    return (
        <div className="container mt-5">
            <h3>Usage Details</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="form-group">
                            <label htmlFor="dataType">Data Type:</label>
                            <select
                                className="form-control"
                                value={dataType}
                                onChange={(e) => setDataType(e.target.value)}
                            >
                                <option>User Type</option>
                                <option>Industry Type</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="month">Month [MM]:</label>
                            <input
                                type="number"
                                id="month"
                                className="form-control"
                                value={formValues.month}
                                onChange={(e) => setFormValues({ ...formValues, month: e.target.value })}
                                placeholder="MM"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="year">Year [YYYY]:</label>
                            <input
                                type="number"
                                id="year"
                                className="form-control"
                                value={formValues.year}
                                onChange={(e) => setFormValues({ ...formValues, year: e.target.value })}
                                placeholder="YYYY"
                            />
                        </div>
                    </div>
                </div>

                {dataType === 'User Type' && (
                    <div>
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead className="table-dark">
                                    <tr>
                                        <th>User Type</th>
                                        <th>RTK Region 1</th>
                                        <th>RTK Region 2</th>
                                        <th>RDS Region 1</th>
                                        <th>RDS Region 2</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {formValues.usageDetails.map((detail, index) => (
                                        <tr key={index}>
                                            <td>{detail.user_type}</td>
                                            <td>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={detail.rtk_region_1}
                                                    onChange={(e) => handleInputChange(index, 'rtk_region_1', e.target.value, 'User Type')}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={detail.rtk_region_2}
                                                    onChange={(e) => handleInputChange(index, 'rtk_region_2', e.target.value, 'User Type')}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={detail.rds_region_1}
                                                    onChange={(e) => handleInputChange(index, 'rds_region_1', e.target.value, 'User Type')}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={detail.rds_region_2}
                                                    onChange={(e) => handleInputChange(index, 'rds_region_2', e.target.value, 'User Type')}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-success">Submit</button>
                        </div>
                    </div>
                )}

                {dataType === 'Industry Type' && (
                    <div>
                        <table className="table table-bordered">
                            <thead className="table-dark">
                                <tr>
                                    <th>Industry Type</th>
                                    <th>RTK Region 1</th>
                                    <th>RTK Region 2</th>
                                    <th>RDS Region 1</th>
                                    <th>RDS Region 2</th>
                                </tr>
                            </thead>
                            <tbody>
                                {formValues.industryDetails.map((row, index) => (
                                    <tr key={index}>
                                        <td>
                                            <select
                                                className="form-control"
                                                value={row.industryType}
                                                onChange={(e) => handleInputChange(index, 'industryType', e.target.value, 'Industry Type')}
                                            >
                                                <option>Select Category</option>
                                                <option>AGRICULTURE</option>
                                                <option>ATOMIC ENERGY</option>
                                                <option>AVIATION</option>
                                                <option>CLIMETOLOGY AND EARTH SCIENCE</option>
                                                <option>COMMUNICATION AND NAVIGATION</option>
                                                <option>DIFFENCE AND EARTH PARAMILITRY</option>
                                                <option>DIGITAL MEDIA</option>
                                                <option>DISASTER MANAGEMENT</option>
                                                <option>DRONE BASED SERVICES</option>
                                                <option>ENGINEERING AND CONSTRUCTION</option>







                                            </select>
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={row.rtkRegion1}
                                                onChange={(e) => handleInputChange(index, 'rtkRegion1', e.target.value, 'Industry Type')}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={row.rtkRegion2}
                                                onChange={(e) => handleInputChange(index, 'rtkRegion2', e.target.value, 'Industry Type')}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={row.rdsRegion1}
                                                onChange={(e) => handleInputChange(index, 'rdsRegion1', e.target.value, 'Industry Type')}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={row.rdsRegion2}
                                                onChange={(e) => handleInputChange(index, 'rdsRegion2', e.target.value, 'Industry Type')}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="text-center">
                            <button type="button" className="btn btn-primary me-2" onClick={addIndustryRow}>
                                Add More
                            </button>
                            <button type="submit" className="btn btn-success">
                                Submit
                            </button>
                        </div>
                    </div>
                )}
            </form>
            <Toaster />
        </div>
    );
};

export default UsageUserType;






