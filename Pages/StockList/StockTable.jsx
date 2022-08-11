import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import styles from './StockTable.module.css';
import { Button} from 'react-bootstrap';
import { v4 as uuid } from 'uuid';
import {Routes, Route, useNavigate} from 'react-router-dom';





function StockTable() {

    const[listStock, setListStock] = useState([]);

    const getStockList = async() => {
      const res = await fetch(
          `https://api.twelvedata.com/stocks`
      );
  
      const stockRes = await res.json();
  
      setListStock(stockRes.data);
      //console.log(stockRes.data);
  };
  useEffect(() => {
    getStockList();
  }, []);

  const navigate = useNavigate();

  const columns: GridColDef[] = [
    { 
      field: 'symbol', 
      headerName: 'Symbol', 
      width: 80,
      valueGetter: (params: GridValueGetterParams) =>
      `${params.row.symbol || ''}`,
    },
    { field: 'name', headerName: 'Name', width: 290 },
    { field: 'currency', headerName: 'Currency', width: 100 },
    {
      field: 'country',
      headerName: 'Country',
      width: 120
    },
    {
      field: 'Action',
      headName: 'Action',
      sortable: false,
      width:100,
      renderCell: (params) => {
        const navigateToStockPrice = (e) => {
           
            navigate('/dashboard/'+ params.row.symbol);
          };
  
        return <Button className={styles.button} onClick={navigateToStockPrice}>Check Price</Button>;
        }
    }
  ];
  return (
    <div className={styles.TableContainer}>
        <h1 className={styles.header}>Stock List</h1>
        <div style={{ height: 600, width: '100%' }}>
        <DataGrid style={{ color: 'white'}} className={styles.DataGridStyle}
          rows={listStock}
          columns={columns}
          getRowId ={(item) => uuid()}
          pageSize={10}
          rowsPerPageOptions={[10]} 
        />
      </div>
    </div>
  )
}

export default StockTable