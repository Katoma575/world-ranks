import styles from './Countries.Table.module.css';

const orderBy = (countries) =>{
    if (direction === 'asc'){
    return countries.sort((a,b) => (a.population > b.population ? 1 : -1));
    }

if (direction === 'desc'){
    return countries.sort((a,b) => (a.population > b.population ? -1 : 1));
    }
};

const CountriesTable = ({countries}) =>{
    const orderedCountries = orderBy(countries);

    return (
    <div>
        < className={styles.heading}>
        <button className={styles.heading_name}>
            <div>Name</div>
        </button>
        <button className={styles.heading_population}>
            <div>Population</div>
        </button>

        {countries.map((country) => (
            <div className={styles.row}>
                <div className={styles.name}>{country.name}</div>
                <div className={styles.population}>{country.population}</div>
            </div>
        ))}
    </div>
    );
};

export default CountriesTable;
