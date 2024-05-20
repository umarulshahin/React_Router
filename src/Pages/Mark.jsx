import { useOutletContext } from "react-router-dom"
const Mark = () => {
    const terms=["Subject","Term 1","Term 2","Trem 3","Trem 4", 'Trem 5']
    const {marks={}} =useOutletContext()
    // console.table(marks)
    return (
        <div className="bg-blue-200 border border-4 ml-4 py-4 border-blue-900">
            <div className="grid grid-cols-6 gap-4 mb-4">
                
                {terms.map((term, index) => (
                    <span key={index} className=" text-2xl font-medium text-center">
                        {term}
                    </span>
                   
                    
                ))}
                
            </div>
            {marks && Object.keys(marks).map((sub) => {
                const value = marks[sub];
                const items = [sub, ...value];
                return (
                    <div>
                    <div key={sub} className="grid grid-cols-6 gap-4 mb-2">
                        {items.map((item, index) => (
                           
                            <span key={index} className="text-xl font-medium text-center">
                                {item}
                                
                            </span>
                             
                        ))}
                       
                    </div>
                    <hr className=" border border-3 border-blue-300 m-4" />
                    </div>
                    
                );
            })}
        </div>
    );
};

export default Mark