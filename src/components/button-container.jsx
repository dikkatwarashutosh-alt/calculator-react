function ButtonContainer({ calculatorItem, addText }) {
    return (
        <div className='button-container'>
            {calculatorItem.map((item) => {

                if (["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."].includes(item)) {
                    return (
                        <button className="btn" key={item} onClick={() => addText(item)}>
                            {item}
                        </button>
                    )
                }

                else {
                    if (["+", "-", "*", "/"].includes(item)) {
                        return (
                            <button className="btn-oparator" key={item} onClick={() => addText(item)}>
                                {item}
                            </button>
                        )
                    }

                    return (
                        <button className="btn-C" key={item} onClick={() => addText(item)}>
                            {item}
                        </button>
                    )
                }
                
            })}

        </div>
    )
}

export default ButtonContainer