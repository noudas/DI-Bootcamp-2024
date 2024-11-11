import math

# Create a class to handle paginated content in a website. 
# A pagination is used to divide long lists of content in a series of pages.
# 
# The Pagination class will accept 2 parameters:
# items (default: None): It will contain a list of contents to paginate.
# pageSize (default: 10): The amount of items to show in each page.
# So for example we could initialize our pagination like this:
class Pagination:
    def __init__(self, items = None, pageSize = 10):
        self.items = items
        self.pageSize = int(pageSize)
        self.page = {index + 1: list(self.items[index * self.pageSize:(index + 1) * self.pageSize]) for index in range(0, math.ceil(len(self.items)/self.pageSize))}
        self.pagenum = 1

# The Pagination class will have a few methods:
# getVisibleItems() : returns a list of items visible depending on the pageSize
# So for example we could use this method like this:
# 
# p.getVisibleItems() 
# # ["a", "b", "c", "d"]

    def getVisibleItems(self):
        print(f"Page {(self.pagenum)}/{len(self.page)+1}: {self.page.get(self.pagenum)}")

    def prevPage(self):
        if self.pagenum == 1:
            print("You be in the first page")
        else:
            self.pagenum -= 1
            print(f"Page {(self.pagenum)}/{len(self.page)+1}")

    def nextPage(self):
        if self.pagenum == len(self.page):
            print("You be in the last page")
        else:
            self.pagenum += 1
            print(f"Page {(self.pagenum)}/{len(self.page)+1}")

    def lastPage(self):
        if self.pagenum == len(self.page):
            print("You be in the last page")
        else:
            self.pagenum = len(self.page)

    def firstPage(self):
        if self.pagenum == 1:
            print("You be in the first page")
        else:
            self.pagenum = 1
            
    def goToPage(self,pageNum):
        print(f"You currently are in the page {self.pagenum}/{len(self.page)}")
        try:
            if pageNum > len(self.page) or pageNum < 1:
                print("Invalid number")
                pageNum = int(input("Type a valid number "))
                self.goToPage(pageNum)
            else:
                self.pagenum = pageNum
                print(f"Going to page {self.pagenum}/{len(self.page)}")
        except:
            raise TypeError("Write a valid number ")
                
def testes():
    # You will have to implement various methods to go through the pages such as:
    # prevPage()
    # nextPage()
    # firstPage()
    # lastPage()
    # goToPage(pageNum)
    # 
    # Here’s a continuation of the example above using nextPage and lastPage:
    # 
    alphabetList = list("abcdefghijklmnopqrstuvwxyz")
    # 
    p = Pagination(alphabetList, 4)
    p.nextPage()
    p.nextPage()
    p.nextPage()
    p.nextPage()
    p.nextPage()
    p.nextPage()
    p.nextPage()

    p.prevPage()
    p.prevPage()
    p.prevPage()
    p.prevPage()
    p.prevPage()
    p.prevPage()
    p.prevPage()

    p.lastPage()
    p.getVisibleItems() 

    p.firstPage()
    p.getVisibleItems() 
    # 
    #p.getVisibleItems() 
    # # ["a", "b", "c", "d"]
    # 
    #p.nextPage()
    # 
    #p.getVisibleItems()
    # # ["e", "f", "g", "h"]
    # 

    # 
    #p.firstPage()

    #p.getVisibleItems()

    #p.lastPage()
    # 
    #p.getVisibleItems()
    # # ["y", "z"]
    # 
    pageNum = 3
    p.goToPage(pageNum)
    p.getVisibleItems()
    # Notes
    # 
    # The second argument (pageSize) could be a float, in that case just convert it to an int (this is also the case for the goToPage method)
    # The methods used to change page should be chainable, so you can call them one after the other like this: p.nextPage().nextPage()
    # Please set the p.totalPages and p.currentPage attributes to the appropriate number as there cannot be a page 0.
    # If a page is outside of the totalPages attribute, then the goToPage method should go to the closest page to the number provided (e.g. there are only 5 total pages, but p.goToPage(10) is given: the p.currentPage should be set to 5; if 0 or a negative number is given, p.currentPage should be set to 1).

testes()