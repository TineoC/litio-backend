import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CompanyService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCompanyDto: CreateCompanyDto) {
    try {
      const company = await this.prisma.company.create({
        data: {
          ...createCompanyDto,
        },
      });

      return company;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async findAll() {
    try {
      const allCompanies = await this.prisma.company.findMany();

      return allCompanies;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async findOne(id: string) {
    try {
      const searchedCompany = await this.prisma.company.findFirstOrThrow({
        where: {
          id,
        },
      });

      return searchedCompany;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async update(id: string, updateCompanyDto: UpdateCompanyDto) {
    try {
      console.log({ ...updateCompanyDto });
      const updatedCompany = await this.prisma.company.update({
        data: {
          ...updateCompanyDto,
        },
        where: {
          id,
        },
      });

      return updatedCompany;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async remove(id: string) {
    try {
      const removedCompany = await this.prisma.company.update({
        data: {
          status: false,
        },
        where: {
          id,
        },
      });

      return removedCompany;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
