import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToBrandSelectedItemFilter, deleteFromBrandSelectedItemFilter } from '../sliceComponent/DropDownBrandSelectedItemSlice';
import { addToDiscountSelectedItemFilter, deleteFromDiscountSelectedItemFilter } from '../sliceComponent/DropDownDiscountSelectedItemSlice ';

const AllfilterSection = (props) => {
    const data = useSelector((state) => state.allData.data.products);

    const [isBrandOpen, setBrandOpen] = useState(false);
    const [isDiscountOpen, setDiscountOpen] = useState(false);

    const [brandSelectedItem, setBrandSelectedItem] = useState(null);
    const [discountSelectedItem, setDiscountSelectedItem] = useState(null);
    const dispatch = useDispatch();
    let brandDistinctValues, discountDistinctValues;

    const toggleBrandDropdown = () => setBrandOpen(!isBrandOpen);
    const toggleDiscountDropdown = () => setDiscountOpen(!isDiscountOpen);

    const handleBrandItemClick = (brand) => {
        setBrandSelectedItem(brand);
        toggleBrandDropdown();
    }

    const handleDiscountItemClick = (discount) => {
        setDiscountSelectedItem(discount);
        toggleDiscountDropdown();
    }
    let filteredData;
    if (data) {
        if (props.category === '' || props.category === 'all') {
            filteredData = data;
        }
        else {
            filteredData = data.filter(data => data.category === props.category);
        }
        console.log("filter data " + filteredData);
        //to get unique brand data from api 
        if (filteredData) {
            const propertyValues = filteredData.map(obj => obj['brand']);
            var newArray = propertyValues.map(function (x) { return x.toLowerCase() })
            const uniqueValuesSet = new Set(newArray);
            brandDistinctValues = Array.from(uniqueValuesSet);
        }
        //to get unique Discount from api 
        if (filteredData) {
            const propertyValues = filteredData.map(obj => obj['discount']);
            const uniqueValuesSet = new Set(propertyValues);
            discountDistinctValues = Array.from(uniqueValuesSet);
            console.log("discunt uniqueue values are " + discountDistinctValues);
        }
    }

    return (
        <>
            <h4>Filters</h4>
            <div className='filtersSection'>
                <ul className='filterList'>
                    {/*barnd section drop down start*/}
                    <li>
                        <button onClick={() => { setBrandSelectedItem(null); setBrandOpen(false); dispatch(deleteFromBrandSelectedItemFilter()) }}>clear</button>

                        <div className='dropdown'>
                            <div className='dropdown-header' onClick={toggleBrandDropdown}>
                                {brandSelectedItem ? filteredData.find(item => item.id === brandSelectedItem) : "Select Brands"}
                                {brandSelectedItem}
                                <i className={`bi bi-chevron-right icon`}></i>
                            </div>
                            <div className={`dropdown-body ${isBrandOpen && 'open'}`}>
                                {
                                    (data) ?
                                        (
                                            brandDistinctValues.map((elm) => {
                                                return (                                                    
                                                    <div className="dropdown-item" onClick={e => { handleBrandItemClick(elm); dispatch(addToBrandSelectedItemFilter(elm)) }} id={elm.id}>
                                                        <span className={`dropdown-item-dot ${elm === brandSelectedItem && 'selected'}`}>• </span>
                                                        {elm}
                                                    </div>
                                                );
                                            })

                                        ) :
                                        (
                                            <h4>Loading...</h4>
                                        )
                                }
                            </div>
                        </div>
                    </li>
                    {/*barnd section drop down end*/}

                    {/*Discount section drop down start*/}
                    <li>
                        <button onClick={() => { setDiscountSelectedItem(null); setDiscountOpen(false); dispatch(deleteFromDiscountSelectedItemFilter()) }} >clear</button>
                        <div className='dropdown'>
                            <div className='dropdown-header' onClick={toggleDiscountDropdown}>
                                {discountSelectedItem ? filteredData.find(item => item.id === discountSelectedItem) : "Select Discount"}
                                {discountSelectedItem} %off
                                <i className={`bi bi-chevron-right icon`}></i>
                            </div>
                            <div className={`dropdown-body ${isDiscountOpen && 'open'}`}>
                                {
                                    (data) ?
                                        //(discountDistinctValues.filter(item => item !== null)
                                        discountDistinctValues.filter(elm => elm != null).map(elm => {
                                            return (
                                                <div className="dropdown-item" onClick={e => { handleDiscountItemClick(elm); dispatch(addToDiscountSelectedItemFilter(elm)) }} id={elm.id}>
                                                    <span className={`dropdown-item-dot ${elm === discountSelectedItem && 'selected'}`}>• </span>
                                                    {elm} %off
                                                </div>
                                                // <h1>data</h1>
                                            );
                                        })
                                        :
                                        (
                                            <h4>Loading...</h4>
                                        )
                                }
                            </div>
                        </div>
                    </li>
                    {/*Discount section drop down end*/}
                </ul>
            </div>

            <div>


            </div>

        </>
    )
}

export default AllfilterSection