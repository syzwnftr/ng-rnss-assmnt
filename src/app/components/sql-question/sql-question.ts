import { Component } from '@angular/core';

@Component({
  selector: 'app-sql-question',
  imports: [],
  templateUrl: './sql-question.html',
  styleUrl: './sql-question.css'
})
export class SqlQuestion {

  sqlQueries = [
    {
      title: 'Question 1',
      query: `SELECT 
        emp.department AS DEPARTMENT,
        emp.name AS NAME,
        emp.age AS AGE,
        plnt.plant_name AS PLANT_NAME,
        comp.name AS COMPANY_NAME,
        'RM' || TO_CHAR(emp.salary, '9999') AS SALARY
      FROM tmp_intvw_employee emp
      JOIN tmp_intvw_plant plnt ON emp.plant_id = plnt.plant_id
      JOIN tmp_intvw_company comp ON plnt.company_id = comp.company_id
      ORDER BY emp.department, emp.name;`
    },
    {
      title: 'Question 2',
      query: `SELECT 
        comp.name AS NAME,
        emp.department AS DEPARTMENT,
        COUNT(*) AS TOTAL_EMPLOYEE
      FROM tmp_intvw_employee emp
      JOIN tmp_intvw_plant plnt ON emp.plant_id = plnt.plant_id
      JOIN tmp_intvw_company comp ON plnt.company_id = comp.company_id
      GROUP BY comp.name, emp.department
      ORDER BY comp.name, emp.department;`
    },
    {
      title: 'Question 3',
      query: `SELECT
        CASE
          WHEN salary BETWEEN 2001 AND 3000 THEN '2001-3000'
          WHEN salary BETWEEN 3001 AND 5000 THEN '3001-5000'
          WHEN salary > 5000 THEN 'More than 5000'
        END AS SALARY_RANGE,
        COUNT(*) AS TOTAL_EMPLOYEE
      FROM tmp_intvw_employee
      WHERE salary > 2000
      GROUP BY
        CASE
          WHEN salary BETWEEN 2001 AND 3000 THEN '2001-3000'
          WHEN salary BETWEEN 3001 AND 5000 THEN '3001-5000'
          WHEN salary > 5000 THEN 'More than 5000'
        END
      ORDER BY SALARY_RANGE;`
    },
    {
      title: 'Question 4',
      query: `WITH salary_groups AS (
        SELECT 'Below 2000' AS SALARY_RANGE, 0 AS min_salary, 2000 AS max_salary, 1 AS sort_order FROM dual
        UNION ALL
        SELECT '2001-3000', 2001, 3000, 2 FROM dual
        UNION ALL
        SELECT '3001-5000', 3001, 5000, 3 FROM dual
        UNION ALL
        SELECT 'More than 5000', 5001, NULL, 4 FROM dual
      )
      SELECT 
        sg.SALARY_RANGE,
        COUNT(e.employee_id) AS TOTAL_EMPLOYEE
      FROM salary_groups sg
      LEFT JOIN tmp_intvw_employee e
        ON (e.salary BETWEEN sg.min_salary AND sg.max_salary)
        OR (sg.max_salary IS NULL AND e.salary >= sg.min_salary)
      GROUP BY sg.SALARY_RANGE, sg.sort_order
      ORDER BY sg.sort_order;`
    }
  ]

  // copyQuery() {
  //   navigator.clipboard.writeText(this.sqlQuery).then(() => {
  //     alert('Copied to clipboard!');
  //   }).catch(err => {
  //     console.error('Failed to copy!', err);
  //   });
  // }

  copyQuery(query: string) {
    navigator.clipboard.writeText(query).then(() => {
      alert('Query copied to clipboard!');
    }).catch(err => {
      console.error('Copy failed: ', err);
    });
  }

  sqlQuery = `WITH salary_groups AS (
    SELECT 'Below 2000' AS SALARY_RANGE, 0 AS min_salary, 2000 AS max_salary, 1 AS sort_order FROM dual
    UNION ALL
    SELECT '2001-3000', 2001, 3000, 2 FROM dual
    UNION ALL
    SELECT '3001-5000', 3001, 5000, 3 FROM dual
    UNION ALL
    SELECT 'More than 5000', 5001, NULL, 4 FROM dual
  )
  SELECT 
    sg.SALARY_RANGE,
    COUNT(e.employee_id) AS TOTAL_EMPLOYEE
  FROM salary_groups sg
  LEFT JOIN tmp_intvw_employee e
    ON (e.salary BETWEEN sg.min_salary AND sg.max_salary)
    OR (sg.max_salary IS NULL AND e.salary >= sg.min_salary)
  GROUP BY sg.SALARY_RANGE, sg.sort_order
  ORDER BY sg.sort_order;`;

}
