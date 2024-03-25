function Welcome ({name}) {  // Non ho capito perchè deve cambiare il valore di age sia qui sia nel componente Age per cambiare effettivamente il valore dell'età
    return(
        <>
        <p>Welcome, <strong>{name}</strong>!</p>
        </>
    )
}

export default Welcome