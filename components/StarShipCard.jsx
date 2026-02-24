function StarShipCard({ starship, onSelect }) {
    return (
        <div className="card" onClick={() => onSelect(starship)}>
            {starship.name}
        </div>
    );
}

export default StarShipCard;