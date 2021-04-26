import { KeyboardArrowDownRounded } from '@material-ui/icons';
import styles from './Countries.Table.module.css';

const orderBy = (countries, direction) =>{
    if (direction === 'asc'){
    return [...countries].sort((a,b) => (a.population > b.population ? 1 : -1));
    }

if (direction === 'desc'){
    return [...countries].sort((a,b) => (a.population > b.population ? -1 : 1));
    }

    return countries;
};

const SortArrow = ({direction}) => {
    if(!direction){
        return <></>
    }

    if (direction === 'desc'){
        return(<div className={styles.heading_arrow}>
            <KeyboardArrowDownRounded color="inherit" />
            </div>
        );
    }else {
        return(
            <div className={styles.heading_arrow}>
            <KeyboardArrowUpRounded color="inherit" />
            </div>
        );
    }
};

const CountriesTable = ({countries}) =>{
    const orderedCountries = orderBy(countries, "desc");

    return (
    <div>
        <div className={styles.heading}>
        <button className={styles.heading_name}>
            <div>Name</div>

            <SortArrow />
        </button>

        <button className={styles.heading_population}>
            <div>Population</div>

            <SortArrow direction="desc"/>
        </button>
    </div>

        {orderedCountries.map((country) => (
            <div className={styles.row}>
                <div className={styles.name}>{country.name}</div>

                <div className={styles.population}>{country.population}</div>
            </div>
        ))}
    </div>
    );
};

export default CountriesTable;
