import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { connect } from 'react-redux';
import { searchFilter, searchFilterArray } from '../redux/actions/userActions';
import Card from './Card';
import InfiniteScroll from "react-infinite-scroll-component";



function ProductGridView(props) {
    const dispatch = useDispatch();
    const [userDataProps, setUserDataProps] = useState(props);
    const [isLoader, setIsLoader] = useState(false);

    useEffect(() => {
        dispatch(searchFilter(""));
    }, [dispatch]);


    const randomNameGenerator = num => {
        let res = '';
        for (let i = 0; i < num; i++) {
            const random = Math.floor(Math.random() * 27);
            res += String.fromCharCode(97 + random);
        };
        return res;
    };

    const fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setIsLoader(true)
        setTimeout(() => {
            const temArray = [{
                "assetid": randomNameGenerator(8),
                "name": "PK-score " + randomNameGenerator(8),
                "version": "",
                "image": "images/tf_logo.png",
                "updated": "2",
                "description": "DevOps Assessment.",
                "techlogies": [{
                    "name": "DevOps " + randomNameGenerator(8),
                    "url": ""
                },
                {
                    "name": "assessment " + randomNameGenerator(8),
                    "url": ""
                }
                ]
            },
            {
                "assetid": randomNameGenerator(9),
                "name": "One-Click Kubernetes Deployment " + randomNameGenerator(9),
                "version": "",
                "image": "images/tf_logo.png",
                "updated": "5",
                "description": "Build Kubernetes cluster on Public Cloud.",
                "techlogies": [{
                    "name": "Kubernetes " + randomNameGenerator(9),
                    "url": ""
                },
                {
                    "name": "Cloud " + randomNameGenerator(9),
                    "url": ""
                },
                {
                    "name": "Deployment " + randomNameGenerator(9),
                    "url": ""
                },
                {
                    "name": "Kubernetes " + randomNameGenerator(9),
                    "url": ""
                },
                {
                    "name": "Cloud " + randomNameGenerator(9),
                    "url": ""
                },
                {
                    "name": "Deployment " + randomNameGenerator(9),
                    "url": ""
                },
                {
                    "name": "Kubernetes " + randomNameGenerator(9),
                    "url": ""
                },
                {
                    "name": "Cloud " + randomNameGenerator(9),
                    "url": ""
                },
                {
                    "name": "Deployment " + randomNameGenerator(9),
                    "url": ""
                },
                {
                    "name": "Kubernetes " + randomNameGenerator(9),
                    "url": ""
                },
                {
                    "name": "Cloud " + randomNameGenerator(9),
                    "url": ""
                },
                {
                    "name": "Deployment " + randomNameGenerator(9),
                    "url": ""
                }
                ]
            },
            {
                "assetid": randomNameGenerator(10),
                "name": "Service Mesh POV for Kubernetes " + randomNameGenerator(10),
                "version": "",
                "image": "images/pytorch-logo.png",
                "updated": "4",
                "description": "Provides Comparison and PK recommendation for ServiceMesh on Kubernetes.",
                "techlogies": [{
                    "name": "Service Mesh " + randomNameGenerator(10),
                    "url": ""
                },
                {
                    "name": "Kubernetes " + randomNameGenerator(10),
                    "url": ""
                }
                ]
            },
            {
                "assetid": randomNameGenerator(11),
                "name": "PK-score " + randomNameGenerator(11),
                "version": "",
                "image": "images/tf_logo.png",
                "updated": "2",
                "description": "DevOps Assessment.",
                "techlogies": [{
                    "name": "DevOps " + randomNameGenerator(11),
                    "url": ""
                },
                {
                    "name": "assessment " + randomNameGenerator(11),
                    "url": ""
                }
                ]
            },
            {
                "assetid": randomNameGenerator(12),
                "name": "One-Click Kubernetes Deployment " + randomNameGenerator(12),
                "version": "",
                "image": "images/tf_logo.png",
                "updated": "5",
                "description": "Build Kubernetes cluster on Public Cloud.",
                "techlogies": [{
                    "name": "Kubernetes " + randomNameGenerator(12),
                    "url": ""
                },
                {
                    "name": "Cloud " + randomNameGenerator(12),
                    "url": ""
                },
                {
                    "name": "Deployment " + randomNameGenerator(12),
                    "url": ""
                }
                ]
            },
            {
                "assetid": randomNameGenerator(13),
                "name": "Service Mesh POV for Kubernetes " + randomNameGenerator(13),
                "version": "",
                "image": "images/pytorch-logo.png",
                "updated": "4",
                "description": "Provides Comparison and PK recommendation for ServiceMesh on Kubernetes.",
                "techlogies": [{
                    "name": "Service Mesh " + randomNameGenerator(13),
                    "url": ""
                },
                {
                    "name": "Kubernetes " + randomNameGenerator(13),
                    "url": ""
                }
                ]
            }
            ]
            setUserDataProps(props.user.data.push(...temArray))
            setIsLoader(false);
            dispatch(searchFilterArray([]))
        }, 500);
    };

    return (
        <InfiniteScroll
            dataLength={props.user.data.length}
            next={fetchMoreData}
            hasMore={true}
            loader={isLoader &&
                (<div className="overlay">
                    <div className="loader"></div>
                </div>)}
        >
            <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-1 p-8">
                {

                    props.user.data && props.user.data.map((asset, index) => {
                        return <Card key={index} asset={asset} />
                    })


                }
            </div>
        </InfiniteScroll>

    );
}
ProductGridView.propTypes = {
    searchFilter: PropTypes.func.isRequired,
}
const mapStateToProps = (state) => ({
    user: state.user,
});

const mapActionsToProps = {
    searchFilter
}

export default connect(mapStateToProps, mapActionsToProps)(ProductGridView);