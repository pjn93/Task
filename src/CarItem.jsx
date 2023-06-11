import React, { useState }  from 'react';
import DataTable from 'react-data-table-component'

const CarItem = props => {
  const columns =[
    {
     name: "id",
     selector: "id" 
    },
    {
      name: "make",
     selector: "make"
    },
    {
      name: " model",
     selector: "model"
    },
    {
      name: "type",
     selector: "type" 
    },
    {
      name: "price",
     selector: "price" 
    }
  ];

  let data1 = [
    {
        id: 1,
        make: "Mitsubishi",
        model: "Lancer",
        type: "Used",

    },
    {
        id: 2,
        make: "Honda",
        model: "vezel",
        type: "new",

    },
    {
        id: 3,
        make: "Honda",
        model: "Civic",
        type: "Used",

    },
    {
        id: 4,
        make: "Audi",
        model: "A3",
        type: "new",

    },
    {
        id: 5,
        make: "Audi",
        model: "A4",
        type: "used",

    },
    {
        id: 6,
        make: "Audi",
        model: "A7",
        type: "new",

    },
    {
        id: 7,
        make: "BMW",
        model: "i8",
        type: "used",

    },
    {
      id: 8,
      make: "BMW",
      model: "i8",
      type: "used",

  },
  {
    id: 9,
    make: "BMW",
    model: "i8",
    type: "used",

},  {
  id: 10,
  make: "BMW",
  model: "i8",
  type: "used",

},  {
  id: 11,
  make: "BMW",
  model: "i8",
  type: "used",

},
]

const data2 = [
    { id: 1, price: 1000 },
    { id: 2, price: 2000 },
    { id: 3, price: 3000 },
    { id: 4, price: 4000 },
    { id: 5, price: 5000 },
    { id: 6, price: 6000 },
    { id: 7, price: 7000 },
    { id: 8, price: 8000 },
    { id: 9, price: 9000 },
    { id: 10, price: 10000 },
    { id: 11, price: 11000 },


];



const [searchText, setSearchText] = useState('');

const combineDataArray = data1.map((item, index) => {
  const mergedItem = { ...item, ...data2[index] };
  return mergedItem;
});

const handleSearch = (event) => {
  setSearchText(event.target.value);
};

const filteredData = combineDataArray.filter((item) =>
Object.values(item).some((value)=>
 String(value).toLowerCase().includes(searchText.toLowerCase())
)
); 

  

  return (
    <div>
     
      <DataTable
        columns={columns}
        data={filteredData}
        subHeader

        subHeaderComponent={
          <input
           type='text' 
           placeholder='search here'
            className='w-25 form-control'
           value={searchText}
           onChange={handleSearch}
           />
        }
pagination
      />
    </div>
  )
}

export default CarItem
