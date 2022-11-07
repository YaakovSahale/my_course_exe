function PhonesComp({home,mobile,fax}) {
    return <div>

<button onClick={()=> console.log({home,mobile,fax})}>print phones</button>

       <h2>home phone number: {home}     </h2>
       <h2>mobile phone number: {mobile}</h2>
       <h2>fax phone number: {fax}</h2>
    </div>
}

export default PhonesComp