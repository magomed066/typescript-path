class Department {
	protected empoloyees: string[] = []

	constructor(private readonly id: string, public name: string) {}

	describe(this: Department) {
		console.log(`Department (${this.id}): ${this.name}`)
	}

	addEmployee(employee: string) {
		this.empoloyees.push(employee)
	}

	printEmployeeInformation() {
		console.log(this.empoloyees.length)
		console.log(this.empoloyees)
	}
}

class ITDepartment extends Department {
	constructor(id: string, admins: string[]) {
		super(id, 'IT')
	}
}

class AccountingDepartment extends Department {
	private lastReport: string

	get recentReports() {
		if (this.lastReport) {
			return this.lastReport
		}
		throw new Error('No report found!')
	}

	constructor(id: string, private reports: string[]) {
		super(id, 'Accounting')
		this.lastReport = reports[0]
	}

	addEmployee(name: string) {
		if (name === 'Maga') {
			return
		}

		this.empoloyees.push(name)
	}

	addReport(report: string) {
		this.reports.push(report)
		this.lastReport = report
	}

	getReports() {
		console.log(this.reports)
	}
}

const accounting = new AccountingDepartment('d1', [])
accounting.describe()

accounting.addEmployee('Maga')
accounting.addEmployee('Ramz')

accounting.printEmployeeInformation()

accounting.addReport('Something went wrong')
accounting.addEmployee('Menu')
console.log(accounting.recentReports)

console.log(accounting)
