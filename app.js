$(function () {

    $('#btn-print').click(function () {

        var tbl = {
            headerRows: 1,
            widths: [ '10%', '20%', '20%', '20%', '30%'],

            body: [
              [ 
                { colSpan: 2, text: 'Inspection Date(s):' }, 
                '',
                { colSpan: 3, text: 'April 7, 2016' },
                '',
                ''
              ],
              [
                { colSpan: 2, text: 'Media:' },
                '',
                { colSpan: 3, text: 'CWA 311 SPCC' },
                '',
                ''
              ],
              [ 
                { colSpan: 2, text: 'Regulatory Program(s)' },
                '',
                { colSpan: 3, text: 'Underground Injection Control ­ Brine' },
                '',
                ''
              ],
              [ 
                { colSpan: 2, text: 'Company Name:' },
                '',
                { colSpan: 3, text: 'Calgary Energy LLC' },
                '',
                ''
              ],
              [
                { colSpan: 2, text: 'Facility Name:' },
                '',
                { colSpan: 3, text: 'House Lease' },
                '',
                ''
              ],
              [ 
                { colSpan: 2, text: 'Facility Physical Location:' },
                '',
                { colSpan: 3, text: 'SW/4 Section 19­T29N­R9E' },
                '',
                ''
              ],
              [ 
                { colSpan: 2, text: '(city, state, zip code)' }, 
                '',
                { colSpan: 3, text: 'Chautauqua, KS' },
                '',
                ''
              ],
              [ 
                { colSpan: 2, text: 'Mailing Address:' },
                '',
                { colSpan: 3, text: 'P.O. Box 737' },
                '',
                ''
              ],
              [ 
                { colSpan: 2, text: '(city, state, zip code)' }, 
                '',
                { colSpan: 3, text: 'Collinsville, OK 74021' },
                '',
                ''
              ],           
              [
                { colSpan: 2, text: 'County/Parish:' },
                '',
                { colSpan: 3, text: 'Osage County' },
                '',
                ''
              ],
              [ 
                { colSpan: 2, rowSpan: 2, text: 'Facility Contact' },
                '',
                { colSpan: 2, text: 'N/A' },
                '',
                { colSpan: 1, text: 'N/A' }
              ],
              [ 
                '',
                '',
                { colSpan: 3, text: 'N/A' },
                '',
                ''
              ],
              [
                { colSpan: 2, text: 'FRS Number:' },
                '',
                { colSpan: 3, text: 'N/A' },
                '',
                ''
              ],
              [
                { colSpan: 2, text: 'Identification/Permit Number:' },
                '',
                { colSpan: 3, text: 'N/A' },
                '',
                ''
              ],
              [
                { colSpan: 2, text: 'Media Number:' },
                '',
                { colSpan: 3, text: 'N/A' },
                '',
                ''
              ],
              [
                { colSpan: 2, text: 'NAICS:' },
                '',
                { colSpan: 3, text: '21111' },
                '',
                ''
              ],
              [
                { colSpan: 2, text: 'SIC:' },
                '',
                { colSpan: 3, text: '1311' },
                '',
                ''
              ],                                                                      
              [ 
                { colSpan: 2, text: 'Facility Representatives:', rowSpan: 4 },
                '',
                { text: 'N/A' },
                { text: 'N/A' },
                { text: 'N/A' }              
              ],
              [ 
                '',
                '',
                { text: 'N/A' },
                { text: 'N/A' },
                { text: 'N/A' }              
              ],
              [ 
                '',
                '',
                { text: 'N/A' },
                { text: 'N/A' },
                { text: 'N/A' }              
              ],
              [ 
                '',
                '',
                { text: 'N/A' },
                { text: 'N/A' },
                { text: 'N/A' }              
              ],
              [ 
                { colSpan: 2, text: 'EPA Inspectors:', rowSpan: 3 },
                '',
                { text: 'Kent Sanborn' },
                { text: '6EN-WR' },
                { text: '918-557-1615' }              
              ],
              [ 
                '',
                '',
                { text: 'N/A' },
                { text: 'N/A' },
                { text: 'N/A' }              
              ],
              [ 
                '',
                '',
                { text: 'N/A' },
                { text: 'N/A' },
                { text: 'N/A' }              
              ],
              [ 
                { colSpan: 2, text: 'State Inspector(s):', rowSpan: 2 },
                '',
                { text: 'N/A' },
                { text: 'N/A' },
                { text: 'N/A' }              
              ],
              [ 
                '',
                '',
                { text: 'N/A' },
                { text: 'N/A' },
                { text: 'N/A' }              
              ],
              [ 
                { colSpan: 2, text: 'Other Inspector(s):', rowSpan: 2 },
                '',
                { text: 'N/A' },
                { text: 'N/A' },
                { text: 'N/A' }              
              ],
              [ 
                '',
                '',
                { text: 'N/A' },
                { text: 'N/A' },
                { text: 'N/A' }              
              ],
              [
                { colSpan: 1, text: '\n\nMetadata', rowSpan: 4 }, 
                { colSpan: 1, text: 'Title:' },
                { colSpan: 3, text: 'Jet-Star Co. Karl Mertang A lease Wichita Falls Wichita Texas' },
                '',
                ''
              ],
              [
                '', 
                { colSpan: 1, text: 'Author:' },
                { colSpan: 3, text: 'US EPA Region 6 Compliance Assurance and Enforcement Division Dallas TX' },
                '',
                ''
              ],
              [ 
                '',
                { colSpan: 1, text: 'Subject:' },
                { colSpan: 3, text: 'Safe Drinking Water Act SDWA' },
                '',
                ''
              ],
              [ 
                '',
                { colSpan: 1, text: 'Keywords:' },
                { colSpan: 3, text: 'Underground Injection Control Groundwater Brine Injection Well Oil Gas' },
                '',
                ''
              ],
              [ 
                { colSpan: 2, rowSpan: 2, text: 'EPA Lead Inspector \n\nSignature/Date' },
                '',
                { colSpan: 2, rowSpan: 1, text: ' \n ' },
                { colSpan: 1, rowSpan: 1, text: ' \n ' },
                ''
              ],
              [ 
                '',
                '',
                { colSpan: 2, text: 'Kent Sanborn' },
                '',
                { colSpan: 1, text: 'Date' }
              ],
              [ 
                { colSpan: 2, rowSpan: 2, text: 'Supervisor \nSignature/Date' },
                '',
                { colSpan: 2, text: ' ' },
                { colSpan: 1, text: ' ' },
                ''
              ],
              [ 
                '',
                '',
                { colSpan: 2, text: 'Willie Lane Jr., Chief, Water Resources Section(6EN-WR)' },
                '',
                { colSpan: 1, text: 'Date' }
              ]
            ]
        }

        var docDefinition = {

          pageSize: 'A4',

          pageMargins: [ 20, 20, 20, 20 ],

          content: [
            { 
              image: 'data:image/png;base64,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',
              width: 80,
              // height: 35,
              absolutePosition : { x: 20, y: 20 }
            },          
            { text: 'Region 6 Compliance Assurance and Enforcement Division', fontSize: 8, bold: true, alignment: 'center', margin: [ 0, 13, 0, 10 ] },
            { text: 'INSPECTION REPORT', fontSize: 15, bold: true, alignment: 'center', margin: [ 0, 0, 0, 10 ] },
            { table: tbl, margin: [ 0, 20, 0, 20 ], fontSize: 8 },

            { text: 'Section I - INTRODUCTION', fontSize: 13, bold: true, margin: [ 0, 350, 0, 10 ] },
            { text: 'PURPOSE OF THE INSPECTION', fontSize: 11, bold: true, margin: [ 0, 0, 0, 10 ] },            
            { text: 'EPA Region 6 inspector Kent Sanborn visited the Jet-Star Co. oil production facility located in the Latitude:' + 
                    '34.057881, Longitude: -98.745412 near Wichita Falls, Texas on . No representative of Jet-Star Co. was present ' +
                    'for the inspection. The inspection was conducted by authority of the Clean Water Act to determine compliance ' +
                    'with the Environmental Protection Agency (EPA) regulations.', fontSize: 8, margin: [ 0, 0, 0, 10 ] },

            { text: 'FACILITY DESCRIPTION', fontSize: 11, bold: true, margin: [ 0, 10, 0, 10 ] },
            { text: 'Known as the Karl Mertang A lease. RRC 09-15443. 4-400 barrel tanks and a saltwater pump.', fontSize: 8, margin: [ 0, 0, 0, 10 ] }, 

            { text: 'Section II - OBSERVATIONS', fontSize: 11, bold: true, margin: [ 0, 10, 0, 10 ] },
            { text: 'Drain valve used to empty pit and bermed area. Oil stained inside. 9k to 12k ppm TSS at the west fence.', fontSize: 8, margin: [ 0, 0, 0, 10 ] },

            { text: 'Section III - AREAS OF CONCERN', fontSize: 11, bold: true, margin: [ 0, 10, 0, 10 ] },
            { text: 'Tank battery fluids being drained to field. Not entirely rain water.', fontSize: 8, margin: [ 0, 0, 0, 10 ] },

            { text: 'Section IV - FOLLOW UP', fontSize: 11, bold: true, margin: [ 0, 10, 0, 10 ] },
            { text: 'Re-inspect in 3 months', fontSize: 8, margin: [ 0, 0, 0, 10 ] },

            { text: 'Section V - LIST OF APPENDICES', fontSize: 11, bold: true, margin: [ 0, 10, 0, 10 ] },
            { text: 'There are no attachments to this report.', fontSize: 8, margin: [ 0, 0, 0, 10 ] }            

          ]

        };

        pdfMake.createPdf(docDefinition).download('Public Inspection Report_Access.pdf');

    })

})