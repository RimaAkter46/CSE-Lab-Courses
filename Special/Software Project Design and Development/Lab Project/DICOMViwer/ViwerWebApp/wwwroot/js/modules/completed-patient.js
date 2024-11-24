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
                    url: `${window.location.origin}/home/patient-completed`,
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
                field: "patient_id",
                title: "ID",
                type: "string"
            },
            {
                field: "name",
                title: "Name",
                type: "string"
            },
            {
                field: "age",
                title: "Age",
                type: "string"
            },
            {
                field: "gender",
                title: "Gender",
                type: "string"
            },
            {
                field: "xray",
                title: "X-Ray",
                type: "string",
            },
            {
                field: "dc_name",
                title: "D.C. Name",
                type: "string",
            },
            {
                field: "patient_id",
                title: "Action",
                width: "180px",
                filterable: false,
                template: `<a class='btn btn-primary btn-sm info-link' href="${window.location.origin}/dicom/Viwer/#:id#?action=completed"><i class="fa-solid fa-circle-info"></i> View</a>`
            }]
    }).data("kendoGrid");

    var customHeader = kendo.template($("#header-template").html()); 
    var customHeaderHtml = customHeader({});
    patientDataGrid.wrapper.before(customHeaderHtml);
}