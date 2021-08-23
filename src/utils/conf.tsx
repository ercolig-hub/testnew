interface formProps {
  id: number;
  name: string;
}

interface tagsProps {
  id: string;
  text: string;
}

interface tagsProps2 {
  id: number;
  name: string;
  disabled?: boolean;
}

export const form: formProps[] = [
  { id: 1, name: "To" },
  { id: 2, name: "CC" },
  { id: 3, name: "BCC" },
];

export const tags: tagsProps[] = [
  { id: "Thailand", text: "Thailand" },
  { id: "India", text: "India" },
];

export const suggestions: tagsProps2[] = [
  { id: 3, name: "Bananas" },
  { id: 4, name: "Mangos" },
  { id: 5, name: "Lemons" },
  { id: 6, name: "Apricots", disabled: true },
];

export const responseMetadata = [
  {
    result: {
      id: "33$1.1.3874954522",
      type: "EOM::WebPage",
      pstate: {
        uuid: "5ef5af42-a2ac-11eb-92b4-345888885815",
        suid: "",
        loid: "1.1.3874954522",
        retentionTime: 0,
        ucount: 21,
      },
      version: "1.1.3874954522-21",
      name: "email_1619014673934.dwp",
      description: "",
      owner: "system_mms",
      creator: "longd",
      created: 1619014677,
      lastModifier: "longd",
      modified: 1619087772,
      locker: "longd",
      locked: 1619014681,
      size: 408,
      statusInfo: {
        name: "",
        identifier: "",
      },
      workFolder: "/Moodys/Emails",
      channel: "Moodys",
      product: "Moodys",
      issueDate: "",
      edition: "",
      attributes: {
        Metadata: {
          DocType: "EmailPage",
          Report: {
            DocumentID: "null",
            WorkingTitle: "testmail",
            ContentType: "Email",
            ContentTypeId: "Email",
            Primary: "true",
            LanguageISOCode: "eng",
            LanguageLabel: "English",
            SourceDocumentUUid: "null",
          },
          Email: {
            From: "test.com",
            To: "cari.test@gmail.com",
            CC: "giuseppe.ercoli-non-empl@moodys.com",
            BCC: "CMSDevTeam@moodys.com,CMSRESEARCH@moodys.com",
            AdditionalBCC: "null",
            AssociatedReportPath:
              "/Moodys/MIS/Reports/2019-06-19/Report/CreditOpinion_Banking-1560949174667.dwp",
            AssociatedReportId: "1.1.3594148607",
            EmailTimestamp: "null",
            AssociatedReportDocId: "1106903",
            AssociatedReportWorkflow: "CO_Fundamental/PostedOnMDC",
            CheckBoxesCC: {
              CCPrimaryAuthor: "davide.tinini-non-empl@moodys.com",
              CCCollab: "null",
              ccRWD: "null",
              ccKPR: "null",
              ccFC: "null",
              ccCOA: "null",
              ccAA: "null",
              ccL1: "null",
              ccL2: "null",
              ccL3: "null",
              ccL4: "null",
              CCCheckbox: "false",
              RWCheckbox: "false",
              KPRCheckbox: "false",
              FCCheckbox: "false",
              COACheckbox: "false",
              AACheckbox: "false",
              L1Checkbox: "false",
              L2L4Checkbox: "false",
              AllCheckbox: "false",
            },
            isSuppressPdf: "false",
            suppressPdfEmployeeID: "null",
          },
          Internal: {
            WebType: "null",
          },
          PublishingFeedback: {
            MA: {
              Status: "null",
              Message: "null",
              ActionCode: "null",
              Timestamp: "null",
            },
            EPICM: {
              Status: "null",
              Message: "null",
              ActionCode: "null",
              Timestamp: "null",
            },
            MSP: {
              Status: "null",
              Message: "null",
              ActionCode: "null",
              Timestamp: "null",
            },
            Publisher: {
              Status: "null",
              Message: "null",
              ActionCode: "null",
              Timestamp: "null",
            },
            Htmlpub: {
              Status: "null",
              Message: "null",
              ActionCode: "null",
              Timestamp: "null",
            },
          },
          Drivers: {
            Driver: {
              Name: "Language",
              Value: "English (US)",
            },
          },
          Translation: {
            SourceDocID: "null",
          },
        },
      },
      interfaceId: "16",
      databaseId: "33",
      lastVersionModificationTime: 1619014677,
      lastVersionModifier: "system_mms",
    },
    statistics: {
      date: "2021-05-04 05:24:22.161",
      version: "5.2020.04",
      requestTime: "30 ms",
    },
    status: "success",
  },
];
