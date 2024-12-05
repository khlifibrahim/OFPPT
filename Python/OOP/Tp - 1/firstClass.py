class DD102 :
    def __init__(self, x, y) :
        self.x = x
        self.y = y

    def __str__(self) :
        return "({0},{1})".format(self.x, self.y)
    
    def __add__(self, p) :
        a = self.x + p.x
        b = self.y + p.y
        return DD102(a, b)
    
    def __eq__(self, c):
        t = self.t + c.x
        u = self.u + u.x
        return DD102(t, u)
    
if __name__ == '__main__':
    p1 = DD102(2, 4)
    p2 = DD102(3,5)

p3 = p1 + p2
print(p3)