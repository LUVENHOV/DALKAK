from .crud import get_member_dislike
from .crud import get_heart_cocktails
from .crud import get_survey_cocktails
from .crud import get_survey_res
from .crud import get_refrigerator_ingredients

from sqlalchemy.orm import Session

class DataLoader:
    def __init__(self, db: Session):
        self.db = db
    
    def load_dislike_ingredient(self, m_id:int):
        db_items=get_member_dislike(self.db,m_id)
        print(db_items)
        return db_items
    
    def load_heart_cocktails(self, m_id:int):
        db_items=get_heart_cocktails(self.db,m_id)
        print(db_items)
        return db_items
    
    def load_survey_cocktails(self, m_id:int):
        db_items=get_survey_cocktails(self.db,m_id)
        print(db_items)
        return db_items
    
    def load_survey_res(self, m_id:int):
        db_items=get_survey_res(self.db,m_id)
        print(db_items)
        return db_items
    
    def load_refrigerator_ingredients(self, m_id:int):
        db_items=get_refrigerator_ingredients(self.db,m_id)
        print(db_items)
        return db_items