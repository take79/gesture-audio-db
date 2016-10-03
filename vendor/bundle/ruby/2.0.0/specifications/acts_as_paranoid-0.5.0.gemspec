# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "acts_as_paranoid"
  s.version = "0.5.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 1.3.6") if s.respond_to? :required_rubygems_version=
  s.authors = ["Zachary Scott", "Goncalo Silva", "Rick Olson"]
  s.date = "2016-08-09"
  s.description = "Check the home page for more in-depth information."
  s.email = ["e@zzak.io"]
  s.homepage = "https://github.com/ActsAsParanoid/acts_as_paranoid"
  s.licenses = ["MIT"]
  s.require_paths = ["lib"]
  s.rubygems_version = "2.0.14.1"
  s.summary = "Active Record plugin which allows you to hide and restore records without actually deleting them."

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<activerecord>, ["< 5.1", ">= 4.0"])
      s.add_runtime_dependency(%q<activesupport>, ["< 5.1", ">= 4.0"])
      s.add_development_dependency(%q<bundler>, ["~> 1.5"])
      s.add_development_dependency(%q<rake>, [">= 0"])
      s.add_development_dependency(%q<rdoc>, [">= 0"])
      s.add_development_dependency(%q<minitest>, ["<= 6.0", ">= 4.0"])
    else
      s.add_dependency(%q<activerecord>, ["< 5.1", ">= 4.0"])
      s.add_dependency(%q<activesupport>, ["< 5.1", ">= 4.0"])
      s.add_dependency(%q<bundler>, ["~> 1.5"])
      s.add_dependency(%q<rake>, [">= 0"])
      s.add_dependency(%q<rdoc>, [">= 0"])
      s.add_dependency(%q<minitest>, ["<= 6.0", ">= 4.0"])
    end
  else
    s.add_dependency(%q<activerecord>, ["< 5.1", ">= 4.0"])
    s.add_dependency(%q<activesupport>, ["< 5.1", ">= 4.0"])
    s.add_dependency(%q<bundler>, ["~> 1.5"])
    s.add_dependency(%q<rake>, [">= 0"])
    s.add_dependency(%q<rdoc>, [">= 0"])
    s.add_dependency(%q<minitest>, ["<= 6.0", ">= 4.0"])
  end
end
