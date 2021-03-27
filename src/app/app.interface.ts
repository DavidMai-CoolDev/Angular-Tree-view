export interface IData{
    id?:number;
    jobSeekerGuid?:string;
    value?:string;
  }
  
  export interface BasicSetup{
    id:number;
    skillsHobbies?: IData;
    experienceLevel?:IData;
    totalWorkExperience?:any;
    permanentAddress?:string;
    presentAddress?:string;
    gender?:string;
    dateOfBirth:string;
  }