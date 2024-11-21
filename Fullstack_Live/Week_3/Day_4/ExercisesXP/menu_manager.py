from menu_item import MenuItem
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

def loader(name, price):
    return MenuItem(name, price)

class MenuManager:
    @staticmethod
    def get_by_name(name):
        try:
            query = """
                    SELECT item_name, item_price FROM Menu_Items
                    WHERE item_name = %s
                    """
            with db_connect() as conn:
                with conn.cursor() as cursor:
                    cursor.execute(query, (name,))
                    result = cursor.fetchone()
                    if result:
                        return loader(result[0], result[1])
                    else:
                        return None
        except Exception as e:
            print(f"Error occurred while retrieving item: {e}")
            return None

    @staticmethod
    def all_items():
        try:
            query = """
                    SELECT item_name, item_price FROM Menu_Items
                    """
            items = []
            with db_connect() as conn:
                with conn.cursor() as cursor:
                    cursor.execute(query)
                    results = cursor.fetchall()
                    for row in results:
                        items.append(loader(row[0], row[1]))
            return items
        except Exception as e:
            print(f"Error occurred while retrieving all items: {e}")
            return []


# Test Code
#menu = MenuManager()
#print(menu.get_by_name('Burger'))
#for item in menu.all_items():
#    print(item) 
