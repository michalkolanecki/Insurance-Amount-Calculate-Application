export interface InsuranceForm {
    insurancePrice: number;
    installment: InstallmentNumber;
    state: StateDamage;
}

export interface InstallmentNumber {
    oneInstallment: number,
    twoInstallments: number,
    fourInstallments: number
}

export interface StateDamage {
    noDamage: boolean,
    doneDamage: boolean
}