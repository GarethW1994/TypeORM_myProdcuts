import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column({ length: 100 })
  description: string;

  @Column("float")
  price: number;
}
