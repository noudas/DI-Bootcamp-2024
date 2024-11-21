'''
PART 1
In this exercise we will use PostgreSQL and Python.

Create a new database and a new table in pgAdmin (or in psql). The table is named Menu_Items and contains the columns

item_id : SERIAL PRIMARY KEY
item_name : VARCHAR(30) NOT NULL
item_price : SMALLINT DEFAULT 0

In the file menu_item.py, create a new class called MenuItem, the attributes should be the name and price of each item.
'''

import psycopg2
from config import DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT

def db_connect():
    connection = psycopg2.connect(
        database=DB_NAME,
        user=DB_USER,
        password=DB_PASSWORD,
        host=DB_HOST,
        port=DB_PORT
    )
    return connection

class MenuItem:
    def __init__(self, name, price=None):
        self.name = name
        self.price = price

    def save(self):
        """Saves the menu item to the database."""
        save_query = '''
            INSERT INTO Menu_Items (item_name, item_price)
            VALUES (%s, %s)
        '''
        params = (self.name, self.price)

        try:
            with db_connect() as conn:
                with conn.cursor() as cursor:
                    cursor.execute(save_query, params)
                    conn.commit()
                    print(f"Item '{self.name}' added to the menu.")
        except Exception as e:
            print(f"Error saving item: {e}")

    def delete(self):
        """Deletes the menu item from the database."""
        delete_query = '''
            DELETE FROM Menu_Items
            WHERE item_name = %s
        '''
        params = (self.name,)

        try:
            with db_connect() as conn:
                with conn.cursor() as cursor:
                    cursor.execute(delete_query, params)
                    conn.commit()
                    print(f"Item '{self.name}' removed from the menu.")
                    return True
        except Exception as e:
            print(f"Error deleting item: {e}")
            return False

    @staticmethod
    def update(old_name, new_name=None, new_price=None):
        with db_connect() as conn:
            with conn.cursor() as cursor:
                if new_name and new_price:
                    query = '''
                        UPDATE Menu_Items
                        SET item_name = %s, item_price = %s
                        WHERE item_name = %s
                    '''
                    params = (new_name, new_price, old_name)

                elif new_name:
                    query = '''
                        UPDATE Menu_Items
                        SET item_name = %s
                        WHERE item_name = %s
                    '''
                    params = (new_name, old_name)

                elif new_price is not None:
                    query = '''
                        UPDATE Menu_Items
                        SET item_price = %s
                        WHERE item_name = %s
                    '''
                    params = (new_price, old_name)

                else:
                    print("No updates were made. Please provide a valid name or price.")
                    return False

                cursor.execute(query, params)
                if cursor.rowcount > 0:
                    conn.commit()
                    print(f"Item '{old_name}' updated successfully.")
                    return True
                else:
                    print(f"Error: Item '{old_name}' not found.")
                    return False

    def __str__(self):
        return f"Item: {self.name}, Price: ${self.price:.2f}"





#item = MenuItem('Beef Stew', 35)
#item.save()
#item = MenuItem('Burger', 35)
#item.save()
#item.delete()
#item.update('Burger', 'Veggie Burger', 37)

