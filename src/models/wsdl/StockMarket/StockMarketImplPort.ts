/* tslint:disable:max-line-length no-empty-interface */
export interface IhowMuchToFinishInput {
  /** http://pa053.fi.muni.cz/#xs:string(undefined) */
  accountId: string;
}

export interface IhowMuchToFinishOutput {
  /** http://pa053.fi.muni.cz/#xs:int(undefined) */
  return: number;
}

export interface IcreateAccountInput {
  /** http://pa053.fi.muni.cz/#xs:string(undefined) */
  email: string;
}

export interface IcreateAccountOutput {
  /** http://pa053.fi.muni.cz/#xs:string(undefined) */
  return: string;
}

export interface IlistInput {}

export interface IlistOutput {
  /** http://pa053.fi.muni.cz/#xs:string(undefined) */
  return: string;
}

export interface IinfoInput {
  /** http://pa053.fi.muni.cz/#xs:string(undefined) */
  stock: string;
}

export interface IinfoOutput {
  /** http://pa053.fi.muni.cz/#xs:int(undefined) */
  return: number;
}

export interface IbalanceInput {
  /** http://pa053.fi.muni.cz/#xs:string(undefined) */
  accountId: string;
}

export interface IbalanceOutput {
  /** http://pa053.fi.muni.cz/#xs:int(undefined) */
  return: number;
}

export interface IbuyInput {
  /** http://pa053.fi.muni.cz/#xs:string(undefined) */
  accountId: string;
  /** http://pa053.fi.muni.cz/#xs:string(undefined) */
  stock: string;
  /** http://pa053.fi.muni.cz/#xs:int(undefined) */
  amount: number;
}

export interface IbuyOutput {}

export interface IownInput {
  /** http://pa053.fi.muni.cz/#xs:string(undefined) */
  accountId: string;
  /** http://pa053.fi.muni.cz/#xs:string(undefined) */
  stock: string;
}

export interface IownOutput {
  /** http://pa053.fi.muni.cz/#xs:int(undefined) */
  return: number;
}

export interface IsellInput {
  /** http://pa053.fi.muni.cz/#xs:string(undefined) */
  accountId: string;
  /** http://pa053.fi.muni.cz/#xs:string(undefined) */
  stock: string;
  /** http://pa053.fi.muni.cz/#xs:int(undefined) */
  amount: number;
}

export interface IsellOutput {}

export interface IStockMarketImplPortSoap {
  howMuchToFinish: (
    input: IhowMuchToFinishInput,
    cb: (
      err: any | null,
      result: IhowMuchToFinishOutput,
      raw: string,
      soapHeader: { [k: string]: any }
    ) => any,
    options?: any,
    extraHeaders?: any
  ) => void;
  createAccount: (
    input: IcreateAccountInput,
    cb: (
      err: any | null,
      result: IcreateAccountOutput,
      raw: string,
      soapHeader: { [k: string]: any }
    ) => any,
    options?: any,
    extraHeaders?: any
  ) => void;
  list: (
    input: IlistInput,
    cb: (
      err: any | null,
      result: IlistOutput,
      raw: string,
      soapHeader: { [k: string]: any }
    ) => any,
    options?: any,
    extraHeaders?: any
  ) => void;
  info: (
    input: IinfoInput,
    cb: (
      err: any | null,
      result: IinfoOutput,
      raw: string,
      soapHeader: { [k: string]: any }
    ) => any,
    options?: any,
    extraHeaders?: any
  ) => void;
  balance: (
    input: IbalanceInput,
    cb: (
      err: any | null,
      result: IbalanceOutput,
      raw: string,
      soapHeader: { [k: string]: any }
    ) => any,
    options?: any,
    extraHeaders?: any
  ) => void;
  buy: (
    input: IbuyInput,
    cb: (
      err: any | null,
      result: IbuyOutput,
      raw: string,
      soapHeader: { [k: string]: any }
    ) => any,
    options?: any,
    extraHeaders?: any
  ) => void;
  own: (
    input: IownInput,
    cb: (
      err: any | null,
      result: IownOutput,
      raw: string,
      soapHeader: { [k: string]: any }
    ) => any,
    options?: any,
    extraHeaders?: any
  ) => void;
  sell: (
    input: IsellInput,
    cb: (
      err: any | null,
      result: IsellOutput,
      raw: string,
      soapHeader: { [k: string]: any }
    ) => any,
    options?: any,
    extraHeaders?: any
  ) => void;
}
