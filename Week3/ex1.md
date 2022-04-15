### Question 1:

- _food_code, food_description_ => Data is not atomic

- _dinner_date_ =>All values in a column must be of the same kind or type. (Although you can create different date formats by using DATE_FORMAT() Function, I think that it is not a good practice to use different formats in the same column.)

- There is a lot of redundant(repeated) data in the table but this is compliant with 1NF.

### Question 2:

'dinner_id, dinner_date', 'venue_code, venue_description', 'food_code, food_description' entities could be extracted as separate tables.

### Question 3:

**members**
member_id (PK)
member_name
member_address

**dinners**
dinner_id (PK)
dinner_date
venue_code (FK)

**venues**
venue_code (PK)
venue_description

**food**
food_code (PK)
food_description

**dinner_member**
member_id (FK)
dinner_id (FK)

**dinner_food**
dinner_id (FK)
food_code (FK)