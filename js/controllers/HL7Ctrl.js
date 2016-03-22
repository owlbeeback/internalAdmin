angular.module('internalAdmin')
.controller("HL7Ctrl", function($scope){
    var allData = {
        "Message1": "MSH|^~\\&||COCWY|||291519949999||ADT^A93|WYGTADM.2.28952339|P|2.1\r\nEVN|A93|291519949999|||MIDNT RUN\r\nPID|1||W989334931|W64854|EGGLESTON^SHANNON^MARIE|LINDA|19891129|F|VAUGHN^SHANNON^MARIE|W|229 W SANDHILL^^DERBY^KS^67937^^^^||316-499-5992|316-651-5198||M|NON|W99943919919|515-92-6196\r\nPV1|1|O|W.LAB|EL|||BREISHK^Breit^Sharon^K^^^MD|BREISHK^Breit^Sharon^K^^^MD|ALVALO^Alvarado^Lorraine^^^^MD|LAB||||CR||N||CLI||98||||||||||||||||HOM|||COCWY|LAB|DEP|||291519939998|291519939998\r\nACC|29159191|19\r\nGT1|1||EGGLESTON^SHANNON^MARIE||229 W SANDHILL^^DERBY^KS^67937^^^^|316-499-5992||19891129|F||SA|515-92-6196|||MERITRUST|1257 N BUCKNER^^DERBY^KS^67937|316-651-5198|||\r\nGT1|2||EGGELSTON^BROCK^AARON||1121 N LAKEVIEW^^DERBY^KS^67937^^^^|316-399-5944||19869323|M||SP|513947141|||SPIRIT AEROSYSTEMS|3891 S OLIVER^^WICHITA^KS^67219|316-526-2121|||\r\nIN1|1|W.PREFSPIR||PREFERRED HEALTH SPIRIT|PO BOX 47219^^WICHITA^KS^67291-7219||316-699-2389|3491921994|MANAGED CARE|||29159791||||EGGLESTON^SHANNON|92|19869323||||||||||||||||||94996514392|||||||M\r\n",
        "Message2": "MSH|^~\\&||COCWY|||201510040000||ADT^A03|WYGTADM.2.28052339|P|2.1\r\nEVN|A03|201510040000|||MIDNT RUN\r\nPID|1||W080334031|W64854|EGGLESTON^SHANNON^MARIE|LINDA|19801129|F|VAUGHN^SHANNON^MARIE|W|220 W SANDHILL^^DERBY^KS^67037^^^^||316-409-5092|316-651-5108||M|NON|W00043910910|515-92-6106\r\nPV1|1|O|W.LAB|EL|||BREISHK^Breit^Shzron^K^^^MD|BREISHK^Breit^Shzron^K^^^MD|ALVALO^Alvzrzdo^Lorrzine^^^^MD|LAB||||CR||N||CLI||08||||||||||||||||HOM|||COCWY|LAB|DEP|||201510030908|201510030908\r\nACC|20150101|10\r\nGT1|1||EGGLESTON^SHANNON^MARIE||220 W SANDHILL^^DERBY^KS^67037^^^^|316-409-5092||19801129|F||SA|515-92-6106|||MERITRUST|1257 N BUCKNER^^DERBY^KS^67037|316-651-5108|||\r\nGT1|2||EGGELSTON^BROCK^AARON||1121 N LAKEVIEW^^DERBY^KS^67037^^^^|316-300-5044||19860323|M||SP|513947141|||SPIRIT AEROSYSTEMS|3801 S OLIVER^^WICHITA^KS^67210|316-526-2121|||\r\nIN1|1|W.PREFSPIR||PREFERRED HEALTH SPIRIT|PO BOX 47210^^WICHITA^KS^67201-7210||316-609-2380|3401021004|MANAGED CARE|||20150701||||EGGLESTON^SHANNON|02|19860323||||||||||||||||||94006514302|||||||M\r\n",
        "MessageType": "Patient Admission",
        "segmentDiff": [ {
            "SegmentName": "MSH",
            "FieldDiff": [{
                "FieldName": "Date/Time Of Message",
                "ComponentDiff": [{
                    "ComponentName": "Time",
                    "Component1Value": "291519949999",
                    "Component2Value": "201510040000",
                    "DataType": "Component",
                    "FirstElementPresent": true,
                    "SecondElementPresent": true
                }],
                "DataType": "Field",
                "FirstElementPresent": false,
                "SecondElementPresent": true
            },
            {
                "FieldName": "Message Type",
                "ComponentDiff": [{
                    "ComponentName": "Trigger Event",
                    "Component1Value": "A93",
                    "Component2Value": "A03",
                    "DataType": "Component",
                    "FirstElementPresent": true,
                    "SecondElementPresent": true
                }],
                "DataType": "Field",
                "FirstElementPresent": true,
                "SecondElementPresent": true
            },
            {
                "FieldName": "Message Control ID",
                "ComponentDiff": [{
                    "ComponentName": "",
                    "Component1Value": "WYGTADM.2.28952339",
                    "Component2Value": "WYGTADM.2.28052339",
                    "DataType": "Component",
                    "FirstElementPresent": true,
                    "SecondElementPresent": true
                }],
                "DataType": "Field",
                "FirstElementPresent": true,
                "SecondElementPresent": true
            }],
            "DataType": "Segment",
            "FirstElementPresent": true,
            "SecondElementPresent": true
        },
        {
            "SegmentName": "EVN",
            "FieldDiff": [{
                "FieldName": "Event Type Code",
                "ComponentDiff": [{
                    "ComponentName": "",
                    "Component1Value": "A93",
                    "Component2Value": "A03",
                    "DataType": "Component",
                    "FirstElementPresent": true,
                    "SecondElementPresent": true
                }],
                "DataType": "Field",
                "FirstElementPresent": true,
                "SecondElementPresent": true
            },
            {
                "FieldName": "Recorded Date/Time",
                "ComponentDiff": [{
                    "ComponentName": "Time",
                    "Component1Value": "291519949999",
                    "Component2Value": "201510040000",
                    "DataType": "Component",
                    "FirstElementPresent": true,
                    "SecondElementPresent": true
                }],
                "DataType": "Field",
                "FirstElementPresent": true,
                "SecondElementPresent": true
            }],
            "DataType": "Segment",
            "FirstElementPresent": true,
            "SecondElementPresent": false
        },
        {
            "SegmentName": "PID",
            "FieldDiff": [{
                "FieldName": "Patient Identifier List",
                "ComponentDiff": [{
                    "ComponentName": "ID Number",
                    "Component1Value": "W989334931",
                    "Component2Value": "W080334031",
                    "DataType": "Component",
                    "FirstElementPresent": true,
                    "SecondElementPresent": true
                }],
                "DataType": "Field",
                "FirstElementPresent": true,
                "SecondElementPresent": true
            },
            {
                "FieldName": "Date/Time of Birth",
                "ComponentDiff": [{
                    "ComponentName": "Time",
                    "Component1Value": "19891129",
                    "Component2Value": "19801129",
                    "DataType": "Component",
                    "FirstElementPresent": true,
                    "SecondElementPresent": true
                }],
                "DataType": "Field",
                "FirstElementPresent": true,
                "SecondElementPresent": true
            },
            {
                "FieldName": "Patient Address",
                "ComponentDiff": [{
                    "ComponentName": "Street Address",
                    "Component1Value": "229 W SANDHILL",
                    "Component2Value": "220 W SANDHILL",
                    "DataType": "Component",
                    "FirstElementPresent": true,
                    "SecondElementPresent": true
                },
                {
                    "ComponentName": "Zip or Postal Code",
                    "Component1Value": "67937",
                    "Component2Value": "67037",
                    "DataType": "Component",
                    "FirstElementPresent": true,
                    "SecondElementPresent": true
                }],
                "DataType": "Field",
                "FirstElementPresent": true,
                "SecondElementPresent": true
            },
            {
                "FieldName": "Phone Number - Home",
                "ComponentDiff": [{
                    "ComponentName": "Telephone Number",
                    "Component1Value": "316-499-5992",
                    "Component2Value": "316-409-5092",
                    "DataType": "Component",
                    "FirstElementPresent": true,
                    "SecondElementPresent": true
                }],
                "DataType": "Field",
                "FirstElementPresent": true,
                "SecondElementPresent": true
            },
            {
                "FieldName": "Phone Number - Business",
                "ComponentDiff": [{
                    "ComponentName": "Telephone Number",
                    "Component1Value": "316-651-5198",
                    "Component2Value": "316-651-5108",
                    "DataType": "Component",
                    "FirstElementPresent": true,
                    "SecondElementPresent": true
                }],
                "DataType": "Field",
                "FirstElementPresent": true,
                "SecondElementPresent": true
            },
            {
                "FieldName": "Patient Account Number",
                "ComponentDiff": [{
                    "ComponentName": "ID Number",
                    "Component1Value": "W99943919919",
                    "Component2Value": "W00043910910",
                    "DataType": "Component",
                    "FirstElementPresent": true,
                    "SecondElementPresent": true
                }],
                "DataType": "Field",
                "FirstElementPresent": true,
                "SecondElementPresent": true
            },
            {
                "FieldName": "SSN Number - Patient",
                "ComponentDiff": [{
                    "ComponentName": "",
                    "Component1Value": "515-92-6196",
                    "Component2Value": "515-92-6106",
                    "DataType": "Component",
                    "FirstElementPresent": true,
                    "SecondElementPresent": true
                }],
                "DataType": "Field",
                "FirstElementPresent": true,
                "SecondElementPresent": true
            }],
            "DataType": "Segment",
            "FirstElementPresent": true,
            "SecondElementPresent": true
        },
        {
            "SegmentName": "PV1",
            "FieldDiff": [{
                "FieldName": "Attending Doctor",
                "ComponentDiff": [{
                    "ComponentName": "Given Name",
                    "Component1Value": "Sharon",
                    "Component2Value": "Shzron",
                    "DataType": "Component",
                    "FirstElementPresent": true,
                    "SecondElementPresent": true
                }],
                "DataType": "Field",
                "FirstElementPresent": true,
                "SecondElementPresent": true
            },
            {
                "FieldName": "Referring Doctor",
                "ComponentDiff": [{
                    "ComponentName": "Given Name",
                    "Component1Value": "Sharon",
                    "Component2Value": "Shzron",
                    "DataType": "Component",
                    "FirstElementPresent": true,
                    "SecondElementPresent": true
                }],
                "DataType": "Field",
                "FirstElementPresent": true,
                "SecondElementPresent": true
            },
            {
                "FieldName": "Consulting Doctor",
                "ComponentDiff": [{
                    "ComponentName": "Family Name",
                    "Component1Value": "Alvarado",
                    "Component2Value": "Alvzrzdo",
                    "DataType": "Component",
                    "FirstElementPresent": true,
                    "SecondElementPresent": true
                },
                {
                    "ComponentName": "Given Name",
                    "Component1Value": "Lorraine",
                    "Component2Value": "Lorrzine",
                    "DataType": "Component",
                    "FirstElementPresent": true,
                    "SecondElementPresent": true
                }],
                "DataType": "Field",
                "FirstElementPresent": true,
                "SecondElementPresent": true
            },
            {
                "FieldName": "Financial Class",
                "ComponentDiff": [{
                    "ComponentName": "Financial Class Code",
                    "Component1Value": "98",
                    "Component2Value": "08",
                    "DataType": "Component",
                    "FirstElementPresent": true,
                    "SecondElementPresent": true
                }],
                "DataType": "Field",
                "FirstElementPresent": true,
                "SecondElementPresent": true
            },
            {
                "FieldName": "Admit Date/Time",
                "ComponentDiff": [{
                    "ComponentName": "Time",
                    "Component1Value": "291519939998",
                    "Component2Value": "201510030908",
                    "DataType": "Component",
                    "FirstElementPresent": true,
                    "SecondElementPresent": true
                }],
                "DataType": "Field",
                "FirstElementPresent": true,
                "SecondElementPresent": true
            },
            {
                "FieldName": "Discharge Date/Time",
                "ComponentDiff": [{
                    "ComponentName": "Time",
                    "Component1Value": "291519939998",
                    "Component2Value": "201510030908",
                    "DataType": "Component",
                    "FirstElementPresent": true,
                    "SecondElementPresent": true
                }],
                "DataType": "Field",
                "FirstElementPresent": true,
                "SecondElementPresent": true
            }],
            "DataType": "Segment",
            "FirstElementPresent": true,
            "SecondElementPresent": true
        },
        {
            "SegmentName": "ACC",
            "FieldDiff": [{
                "FieldName": "Accident Date/Time",
                "ComponentDiff": [{
                    "ComponentName": "Time",
                    "Component1Value": "29159191",
                    "Component2Value": "20150101",
                    "DataType": "Component",
                    "FirstElementPresent": true,
                    "SecondElementPresent": true
                }],
                "DataType": "Field",
                "FirstElementPresent": true,
                "SecondElementPresent": true
            },
            {
                "FieldName": "Accident Code",
                "ComponentDiff": [{
                    "ComponentName": "Identifier",
                    "Component1Value": "19",
                    "Component2Value": "10",
                    "DataType": "Component",
                    "FirstElementPresent": true,
                    "SecondElementPresent": true
                }],
                "DataType": "Field",
                "FirstElementPresent": true,
                "SecondElementPresent": true
            }],
            "DataType": "Segment",
            "FirstElementPresent": true,
            "SecondElementPresent": true
        },
        {
            "SegmentName": "GT1",
            "FieldDiff": [{
                "FieldName": "Guarantor Address",
                "ComponentDiff": [{
                    "ComponentName": "Street Address",
                    "Component1Value": "229 W SANDHILL",
                    "Component2Value": "220 W SANDHILL",
                    "DataType": "Component",
                    "FirstElementPresent": true,
                    "SecondElementPresent": true
                },
                {
                    "ComponentName": "Zip or Postal Code",
                    "Component1Value": "67937",
                    "Component2Value": "67037",
                    "DataType": "Component",
                    "FirstElementPresent": true,
                    "SecondElementPresent": true
                }],
                "DataType": "Field",
                "FirstElementPresent": true,
                "SecondElementPresent": true
            },
            {
                "FieldName": "Guarantor Ph Num - Home",
                "ComponentDiff": [{
                    "ComponentName": "Telephone Number",
                    "Component1Value": "316-499-5992",
                    "Component2Value": "316-409-5092",
                    "DataType": "Component",
                    "FirstElementPresent": true,
                    "SecondElementPresent": true
                }],
                "DataType": "Field",
                "FirstElementPresent": true,
                "SecondElementPresent": true
            },
            {
                "FieldName": "Guarantor Date/Time Of Birth",
                "ComponentDiff": [{
                    "ComponentName": "Time",
                    "Component1Value": "19891129",
                    "Component2Value": "19801129",
                    "DataType": "Component",
                    "FirstElementPresent": true,
                    "SecondElementPresent": true
                }],
                "DataType": "Field",
                "FirstElementPresent": true,
                "SecondElementPresent": true
            },
            {
                "FieldName": "Guarantor SSN",
                "ComponentDiff": [{
                    "ComponentName": "",
                    "Component1Value": "515-92-6196",
                    "Component2Value": "515-92-6106",
                    "DataType": "Component",
                    "FirstElementPresent": true,
                    "SecondElementPresent": true
                }],
                "DataType": "Field",
                "FirstElementPresent": true,
                "SecondElementPresent": true
            },
            {
                "FieldName": "Guarantor Employer Name",
                "ComponentDiff": [{
                    "ComponentName": "Prefix",
                    "Component1Value": "67937",
                    "Component2Value": "67037",
                    "DataType": "Component",
                    "FirstElementPresent": true,
                    "SecondElementPresent": true
                }],
                "DataType": "Field",
                "FirstElementPresent": true,
                "SecondElementPresent": true
            },
            {
                "FieldName": "Guarantor Employer Address",
                "ComponentDiff": [{
                    "ComponentName": "Street Address",
                    "Component1Value": "316-651-5198",
                    "Component2Value": "316-651-5108",
                    "DataType": "Component",
                    "FirstElementPresent": true,
                    "SecondElementPresent": true
                }],
                "DataType": "Field",
                "FirstElementPresent": true,
                "SecondElementPresent": true
            }],
            "DataType": "Segment",
            "FirstElementPresent": true,
            "SecondElementPresent": true
        },
        {
            "SegmentName": "GT1",
            "FieldDiff": [{
                "FieldName": "Guarantor Address",
                "ComponentDiff": [{
                    "ComponentName": "Zip or Postal Code",
                    "Component1Value": "67937",
                    "Component2Value": "67037",
                    "DataType": "Component",
                    "FirstElementPresent": true,
                    "SecondElementPresent": true
                }],
                "DataType": "Field",
                "FirstElementPresent": true,
                "SecondElementPresent": true
            },
            {
                "FieldName": "Guarantor Ph Num - Home",
                "ComponentDiff": [{
                    "ComponentName": "Telephone Number",
                    "Component1Value": "316-399-5944",
                    "Component2Value": "316-300-5044",
                    "DataType": "Component",
                    "FirstElementPresent": true,
                    "SecondElementPresent": true
                }],
                "DataType": "Field",
                "FirstElementPresent": true,
                "SecondElementPresent": true
            },
            {
                "FieldName": "Guarantor Date/Time Of Birth",
                "ComponentDiff": [{
                    "ComponentName": "Time",
                    "Component1Value": "19869323",
                    "Component2Value": "19860323",
                    "DataType": "Component",
                    "FirstElementPresent": true,
                    "SecondElementPresent": true
                }],
                "DataType": "Field",
                "FirstElementPresent": true,
                "SecondElementPresent": true
            },
            {
                "FieldName": "Guarantor Employer Name",
                "ComponentDiff": [{
                    "ComponentName": "Family Name",
                    "Component1Value": "3891 S OLIVER",
                    "Component2Value": "3801 S OLIVER",
                    "DataType": "Component",
                    "FirstElementPresent": true,
                    "SecondElementPresent": true
                },
                {
                    "ComponentName": "Prefix",
                    "Component1Value": "67219",
                    "Component2Value": "67210",
                    "DataType": "Component",
                    "FirstElementPresent": true,
                    "SecondElementPresent": true
                }],
                "DataType": "Field",
                "FirstElementPresent": true,
                "SecondElementPresent": true
            }],
            "DataType": "Segment",
            "FirstElementPresent": true,
            "SecondElementPresent": true
        },
        {
            "SegmentName": "IN1",
            "FieldDiff": [{
                "FieldName": "Insurance Company Address",
                "ComponentDiff": [{
                    "ComponentName": "Street Address",
                    "Component1Value": "PO BOX 47219",
                    "Component2Value": "PO BOX 47210",
                    "DataType": "Component",
                    "FirstElementPresent": true,
                    "SecondElementPresent": true
                },
                {
                    "ComponentName": "Zip or Postal Code",
                    "Component1Value": "67291-7219",
                    "Component2Value": "67201-7210",
                    "DataType": "Component",
                    "FirstElementPresent": true,
                    "SecondElementPresent": true
                }],
                "DataType": "Field",
                "FirstElementPresent": true,
                "SecondElementPresent": true
            },
            {
                "FieldName": "Insurance Co Phone Number",
                "ComponentDiff": [{
                    "ComponentName": "Telephone Number",
                    "Component1Value": "316-699-2389",
                    "Component2Value": "316-609-2380",
                    "DataType": "Component",
                    "FirstElementPresent": true,
                    "SecondElementPresent": true
                }],
                "DataType": "Field",
                "FirstElementPresent": true,
                "SecondElementPresent": true
            },
            {
                "FieldName": "Group Number",
                "ComponentDiff": [{
                    "ComponentName": "",
                    "Component1Value": "3491921994",
                    "Component2Value": "3401021004",
                    "DataType": "Component",
                    "FirstElementPresent": true,
                    "SecondElementPresent": true
                }],
                "DataType": "Field",
                "FirstElementPresent": true,
                "SecondElementPresent": true
            },
            {
                "FieldName": "Plan Effective Date",
                "ComponentDiff": [{
                    "ComponentName": "",
                    "Component1Value": "29159791",
                    "Component2Value": "20150701",
                    "DataType": "Component",
                    "FirstElementPresent": true,
                    "SecondElementPresent": true
                }],
                "DataType": "Field",
                "FirstElementPresent": true,
                "SecondElementPresent": true
            },
            {
                "FieldName": "Insured's Relationship To Patient",
                "ComponentDiff": [{
                    "ComponentName": "Identifier",
                    "Component1Value": "92",
                    "Component2Value": "02",
                    "DataType": "Component",
                    "FirstElementPresent": true,
                    "SecondElementPresent": true
                }],
                "DataType": "Field",
                "FirstElementPresent": true,
                "SecondElementPresent": true
            },
            {
                "FieldName": "Insured's Date Of Birth",
                "ComponentDiff": [{
                    "ComponentName": "Time",
                    "Component1Value": "19869323",
                    "Component2Value": "19860323",
                    "DataType": "Component",
                    "FirstElementPresent": true,
                    "SecondElementPresent": true
                }],
                "DataType": "Field",
                "FirstElementPresent": true,
                "SecondElementPresent": true
            },
            {
                "FieldName": "Policy Number",
                "ComponentDiff": [{
                    "ComponentName": "",
                    "Component1Value": "94996514392",
                    "Component2Value": "94006514302",
                    "DataType": "Component",
                    "FirstElementPresent": true,
                    "SecondElementPresent": true
                }],
                "DataType": "Field",
                "FirstElementPresent": true,
                "SecondElementPresent": true
            }],
            "DataType": "Segment",
            "FirstElementPresent": true,
            "SecondElementPresent": true
        }],
        "DataType": "Message",
        "FirstElementPresent": true,
        "SecondElementPresent": true
    }

   $scope.segmentDiffs = allData.segmentDiff;
   $scope.fieldDiffs = [];
    allData.segmentDiff.forEach(function(segDiff){
        segDiff.FieldDiff.forEach(function(fieldDiff){
             $scope.fieldDiffs.push(fieldDiff);
        })
    });
    
});