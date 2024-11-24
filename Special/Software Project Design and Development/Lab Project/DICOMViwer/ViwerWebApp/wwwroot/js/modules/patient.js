const divPatientDataGrid = $("#divPatientDataGrid");


$(document).ready(() => {
    $("#loader").hide();
    LoadPatientListGrid();
})

const LoadPatientListGrid = () => {
    var patientDataGrid = $(divPatientDataGrid).kendoGrid({
        dataSource: {
            transport: {
                read: {
                    url: `${window.location.origin}/home/patient-list`,
                    dataType: "json",
                }
            },
            pageSize: 20,
        },
        height: 500,
        sortable: true,
        pageable: {
            refresh: true,
            pageSizes: true,
            buttonCount: 5
        },
        columns: [
            {
                field: "patientId",
                title: "ID",
                type: "string",
                width: 70
            },
            {
                field: "patientName",
                title: "Name",
                type: "string",
                width: 120
            },
            {
                field: "patientAge",
                title: "Age",
                type: "string",
                width: 70
            },
            {
                field: "patientSex",
                title: "Gender",
                type: "string",
                width: 70
            },
            {
                field: "institutionName",
                title: "Institue",
                type: "string",
                width: 230
            },
            {
                field: "patientId",
                title: "Action",
                width: 70,
                filterable: false,
                template: `<a class='btn btn-primary btn-sm info-link' href="${window.location.origin}/dicom/Viwer/#:patientId#"><i class="fa-solid fa-circle-info"></i> View</a>`
            }]
    }).data("kendoGrid");

    var customHeader = kendo.template($("#header-template").html()); 
    var customHeaderHtml = customHeader({});
    patientDataGrid.wrapper.before(customHeaderHtml);
}