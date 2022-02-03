import { isEditable } from '@testing-library/user-event/dist/utils';
import MaterialTable from 'material-table';
import minifaker , { word } from 'minifaker'
import 'minifaker/locales/en'
import React, { useState } from 'react';

const SearchPage = () => {
  let users = [];
  for( let i=0;i<10;++i)
  {
    users[i] = 
      {
        id : minifaker.arrayElement(['N','M','G'])+minifaker.arrayElement(['BT','MT'])+minifaker.number({min : 220000, max: 220999}), 
        gender : minifaker.arrayElement(['Male','Female']),
        name : minifaker.firstName({locale : 'en' , gender: 'Male'}),
        email : minifaker.email({locale : 'en', firstName : word() ,provider : 'gmail'})+".com",
        dob :  minifaker.arrayElement(['21-02-2000','20-11-2000','11-02-2001']),
        quota : minifaker.arrayElement(['NRI','MGMT','Gov']),
        pgm : minifaker.arrayElement(['Btech','Mtech']),
        phone : minifaker.phoneNumber({locale : 'en'})
    
      }
  }
  const [data,setData] = useState(users);

  const columns=[
    {
      title: 'Reg-ID' ,field:'id'
    },
    {
      title:'Name',field:'name'
    }
    ,
    {
      title:'Gender',field:'gender'
    },
    {
      title:'DOB',field:'dob'
    },
    {
      title:'Quota',field:'quota'
    },
    {
      title:'Program',field:'pgm'
    },
    {
      title:'Phone',field:'phone'
    },
    {
      title:'Email',field:'email'
    }
  ]
  return <div className="min-w-screen w-[350px] sm:w-auto h-full bg-slate-800 rounded-md p-1">
    <MaterialTable 
    style={{
      width: 'auto',
      height: '100%',
      padding: '1rem'
    }}
    title='Registrations'
    data={data}
    columns={columns}
    options={{
      exportButton : true,
      tableLayout : 'fixed',
      maxBodyHeight: 400,
      paging: false,
      filtering : true,
    }}
    editable={{
      onRowAdd: newData =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            setData([...data, newData]);
            
            resolve();
          }, 1000)
        }),
      onRowUpdate: (newData, oldData) =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            const dataUpdate = [...data];
            const index = oldData.tableData.id;
            dataUpdate[index] = newData;
            setData([...dataUpdate]);

            resolve();
          }, 1000)
        })
    }}/> 
  </div>;
};

export default SearchPage;
