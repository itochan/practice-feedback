class Practice < ApplicationRecord
  has_many :comment

  before_create :generate_access_hash

  mount_uploader :file, PracticeUploader

  validates :title, presence: true
  validates :file, presence: true

  private
  def generate_access_hash
    self.access_hash = SecureRandom.hex
  end
end
