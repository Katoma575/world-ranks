import styles from './Countries.Table.module.css';

const CountriesTable = ({countries}) =>{
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
