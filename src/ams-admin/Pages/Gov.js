import { isEditable } from '@testing-library/user-event/dist/utils';
import MaterialTable from 'material-table';
import minifaker , { word } from 'minifaker'
import 'minifaker/locales/en'
import React, { useState } from 'react';

const Gov = () => {
  let yr =  new Date().getFullYear();
  let yr_ = yr + 1;
  let users = [];
  for( let i=0;i<100;++i)
  {
    users[i] = 
      {
        id : minifaker.arrayElement(['N','M','G'])+minifaker.arrayElement(['BT','MT'])+minifaker.number({min : 220000, max: 220999}), 
        gender : minifaker.arrayElement(['Male','Female']),
        name : minifaker.firstName({locale : 'en' , gender: 'Male'}),
        email : minifaker.email({locale : 'en', firstName : word() ,provider : 'gmail'})+".com",
        dob :  minifaker.arrayElement(['21-02-2000','20-11-2000','11-02-2001']),
        phone : minifaker.phoneNumber({locale : 'en'}),
        branch : minifaker.arrayElement(['CSE','ECE','EEE','CE','ME']),
    
      }
  }
  const [data,setData] = useState(users);
 const columns=[
    { title: 'Reg.No' ,field:'id' },
    { title:'Name',field:'name'},
    { title:'Gender',field:'gender'},
    { title:'DOB',field:'dob',cellStyle : { minWidth: 120,} },
    { title:'Email',field:'email'},
    { title:'Branch',field:'branch'},
    { title:'Phone',field:'phone',cellStyle : { minWidth: 200,}},
  ]
  
  return (
    <div className="overflow-x-auto w-[350px] sm:w-auto border-[4px] bg-white rounded-md border-black">
        <MaterialTable
        style={{
            padding: '1rem'
        }}
      title={"Registrations: "+yr+"-"+yr_+"-Government"}
      columns={columns}
      data={data}
      options={{
          headerStyle : {
              color: 'white',
              textAlign: 'center',
              backgroundColor: '#717E8E',
              fontSize: 17,
              fontWeight: 'bold'
          },
          maxBodyHeight: 450,
          exportButton : true,
          filtering: true,
        actionsCellStyle : {
            minWidth: 100
        },
        columnsButton : true,
        paginationType: 'stepped',
        paging : false,
        exportAllData : true,
        pageSize: 50,
        pageSizeOptions : [50,100,150,200,250,500,1000]
      }}

      editable={{
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
      }}
    />
    </div>
  );
};
export default Gov;
