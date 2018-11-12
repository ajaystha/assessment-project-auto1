import React from 'react';

import classes from './CarFilters.module.scss';

import SelectBox from '../../../SelectBox/SelectBox';


const carFilters = (props) => {
  const selectedFilters = {};

  const updateSelectedFilters = (type, value) => {
    selectedFilters[type] = (value === 'All manufacturers' || value === 'All car colors') ? undefined : value;
  }

  return (
    <div className={classes.CarFilters}>

      {(props.colors.isFetching)
        ? <div></div>
        : <>
            <label className="label">Color</label>
            <SelectBox
              defaultItem="All car colors"
              items={props.colors.colors}
              selected={(value) => updateSelectedFilters('color', value)}
            />
          </>
      }

      { (props.brands.isFetching)
        ? <div></div>
        : <>
            <label className="label">Manufacturer</label>
            <SelectBox
              defaultItem="All manufacturers"
              items={props.brands.manufacturers}
              selected={(value) => updateSelectedFilters('manufacturer', value)}
            />
          </>
      }


      <button type="button"
        className="button"
        onClick={() => props.filterUpdated(selectedFilters)}
      >Filter</button>
    </div>
  )
};
export default carFilters;
