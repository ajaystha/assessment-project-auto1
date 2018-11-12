import React from 'react';

import SelectBox from '../SelectBox/SelectBox';
import CarList from './CarList/CarList';
import Pagination from './Pagination/Pagination';

import CarPlaceholder from './CarList/CarPlaceholder/CarPlaceholder';

import classes from './CarListView.module.scss';

const sorts = [
  {
    label: 'Mileage - Ascending',
    type: 'asc'
  },
  {
    label: 'Mileage - Descending',
    type: 'des'
  }
]


const carListView = (props) => {
  const sortSelected = (value) => {
    let selectedSort;
    const sortType = sorts.find(item => item.label === value);

    if (sortType) {
      selectedSort = sortType.type;
    } else {
      selectedSort = undefined;
    }

    props.sortUpdated(selectedSort);
  }


  return (
    <>
      <div className={classes.Header}>
        <div>
          <div className={classes.Title}>Available cars</div>
          <p>Showing {props.currentPage * 10} of {(props.cars.totalPageCount || 0) * 10} results</p>
        </div>

        <div style={{width:'250px'}}>
          <SelectBox
            defaultItem="None"
            items={sorts.map(item => item.label)}
            selected={(value) => sortSelected(value)} />
        </div>

      </div>

      { props.cars.isFetching
        ? <CarPlaceholder />
        : <CarList cars={props.cars.cars} />
      }

      <Pagination
        currentPage={props.currentPage}
        totalPageCount={props.cars.totalPageCount}
        clicked={(value) => props.pageUpdated(value)}/>
    </>
  )
};
export default carListView;
