const ItemListContainer = ({greeting}) => {
        return (

            <div className="card p-5 item">
                <div className="card-body text-center">
                   {greeting}
                </div>
            </div>
        )
}
    


export default ItemListContainer;