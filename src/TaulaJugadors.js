import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import MUIDataTable from 'mui-datatables';
import CustomToolbarSelect from "./CustomToolbarSelect";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

const columns = ["Nom", "Equip", "Ciutat", "Provincia", "Comunitat"];

const data = [
			 ["Miquel Soler Riera", "CD Manacor", "Manacor", "Mallorca", "Illes Balears"],
			 ["Jaume Pericàs Riutort", "CE Alaior", "Alaior", "Menorca", "Illes Balears"],
			 ["Tomeu Estelrich Suau", "Sporting Ciutadella", "Ciutadella", "Menorca", "Illes Balears"],
			 ["Pere Matamales Garcies", "RCD Mallorca", "Palma", "Mallorca", "Illes Balears"],
			 ["Miquel Soler Riera", "CD Manacor", "Manacor", "Mallorca", "Illes Balears"],
			 ["Jaume Pericàs Riutort", "CE Alaior", "Alaior", "Menorca", "Illes Balears"],
			 ["Tomeu Estelrich Suau", "Sporting Ciutadella", "Ciutadella", "Menorca", "Illes Balears"],
			 ["Pere Matamales Garcies", "RCD Mallorca", "Palma", "Mallorca", "Illes Balears"],
			 ["Miquel Soler Riera", "CD Manacor", "Manacor", "Mallorca", "Illes Balears"],
			 ["Jaume Pericàs Riutort", "CE Alaior", "Alaior", "Menorca", "Illes Balears"],
			 ["Tomeu Estelrich Suau", "Sporting Ciutadella", "Ciutadella", "Menorca", "Illes Balears"],
			 ["Pere Matamales Garcies", "RCD Mallorca", "Palma", "Mallorca", "Illes Balears"]
			];

const options = {
	filterType: 'checkbox',
	resizableColumns: true,
	customToolbarSelect: selectedRows => (
        <CustomToolbarSelect selectedRows={selectedRows} />
      ),
	textLabels: {
        body: {
          noMatch: "No s'han trobat registres!",
        },
        pagination: {
          next: "Pàgina Següent",
          previous: "Pàgina Anterior",
          rowsPerPage: "Files per pàgina:",
          displayRows: "de" // 1-10 of 30
        },
        toolbar: {
          search: "Cercar",
          downloadCsv: "Descarregar CSV",
          print: "Imprimir",
          viewColumns: "Mostrar Columnes",
          filterTable: "Filtrar Taula"
        },
        filter: {
          all: "Tots els Registres",
          title: "FILTRAR PER",
          reset: "Reset",          
        },
        selectedRows: {
          text: "files han sigut seleccionades",
          delete: "Esborrar Fila",
          deleteAria: "Files Seleccionades Esborrades"
        },
      },
      onRowClick: (rowData, rowState) => {
        console.log(rowData, rowState);
        alert("Click sobre "+rowData[0]);
      }
};

const theme = createMuiTheme({
  palette: { type: 'light' },
  typography: { useNextVariants: true },
});

class App extends Component {

	constructor() {
        super(); 
     }

	render() {
	  return (
	  	<div>
	  		<MuiThemeProvider theme={theme}>
			    <MUIDataTable title={"Llistat de Jugadors"} 
			    			  data={data} 
			    			  columns={columns} 
			    			  options={options} />
		  	</MuiThemeProvider>
	    </div>
	  );
	}

}

export default App;
