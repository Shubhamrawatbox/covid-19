import React, { useEffect, useState } from 'react'
import styles from './CountryPicker.module.css'
import { NativeSelect, FormControl } from '@material-ui/core'
import { fectchCountries } from '../../Api'
const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setfectchedCountries] = useState([])
    useEffect(() => {
        const fetchAPI = async () => {
            setfectchedCountries(await fectchCountries())
        }
        fetchAPI();
    }, [setfectchedCountries])

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="global">Global</option>
                {fetchedCountries.map((country,i)=><option value={country} key={i}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
