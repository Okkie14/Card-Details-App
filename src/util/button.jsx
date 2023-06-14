
export default function Button({ onClick }) {
    
    return (
        <div className='btn'>
            <button 
                className='confirm-btn' 
                type='submit' 
                onClick={onClick}
            >Confirm</button>
        </div>
    )
}
