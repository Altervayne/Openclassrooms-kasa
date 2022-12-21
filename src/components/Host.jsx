import '../styles/Host.css'

function Host({host}) {
    const firstName = host.name.split(" ")[0]
    const lastName = host.name.split(" ")[1]

    return (
        <div className='host__container'>
            <img src={host.picture} alt={`Photographie de ${host.name}`} className='host__image'></img>
            <p className='host__name'>{firstName}<br/>{lastName}</p>
        </div>
    )
}

export default Host