function PrimaryButton(props){
    return(
        <button className="cursor-pointer px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
          
                {props.buttonText}
          
        </button>
    )
}

export default PrimaryButton;