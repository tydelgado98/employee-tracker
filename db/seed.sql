USE employee_db;

INSERT INTO department(name)
VALUES
    ('hr'),
    ('engineering'),
    ('sales');

INSERT INTO role(title, salary, department_id)
VALUES
    ('manager', 100000, 1),
    ('engineer', 80000, 2),
    ('sales rep', 60000, 3);


INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
    ('jim', 'halpert', 1, null),
    ('pam', 'beasly',2, 1),
    ('sam', 'puppet',3, 1);