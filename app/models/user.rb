class User < ActiveRecord::Base
  has_many :notations, dependent: :destroy
  # has_many :notations, through: :scores

  before_save { self.email = email.downcase }
  before_create :create_remember_token

  validates :name, presence: true, length: { minimum: 1, maximum: 40 }

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(?:\.[a-z\d\-]+)*\.[a-z]+\z/i
  validates :email, presence: true,
                    length: { minimum: 5, maximum: 40 },
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }

  has_secure_password

  validates :password, length: { minimum: 6, maximum: 20 }



  def self.new_remember_token
    SecureRandom.urlsafe_base64
  end

  def self.digest(token)
    Digest::SHA1.hexdigest(token.to_s)
  end

  private

  def create_remember_token
    self.remember_token = User.digest(User.new_remember_token)
  end
end
