from sqlalchemy.orm import Session
from sqlalchemy.sql import text
from database.models import *

def get_member_dislike(db: Session, m_id: int):
    dislike_query = text("""
        SELECT i.name
        FROM SURVEY_INGREDIENT si
        LEFT JOIN INGREDIENT i ON si.ingredient_id = i.id
        LEFT JOIN SURVEY s ON si.survey_id = s.id
        WHERE s.member_id = :m_id
    """)
    return db.execute(dislike_query, {'m_id': m_id}).fetchall()

def get_heart_cocktails(db: Session, m_id: int):
    heart_cocktails_query = text("""
        SELECT id
        FROM HEART
        WHERE member_id = :m_id
    """)
    return db.execute(heart_cocktails_query, {'m_id': m_id}).fetchall()

def get_survey_cocktails(db: Session, m_id: int):
    survey_cocktails_query = text("""
        SELECT sc.cocktail_id
        FROM SURVEY_COCKTAIL sc
        LEFT JOIN SURVEY s ON sc.survey_id = s.id
        WHERE s.member_id = :m_id
    """)
    return db.execute(survey_cocktails_query, {'m_id': m_id}).fetchall()

def get_survey_res(db: Session, m_id: int):
    survey_cocktails_query = text("""
        SELECT b.name,alcohol_content,sweetness
        FROM SURVEY s
        LEFT JOIN BASE b ON s.base_id = b.id
        WHERE s.member_id = :m_id
    """)
    return db.execute(survey_cocktails_query, {'m_id': m_id}).fetchall()